import json
import re
import sys
from pathlib import Path
import requests

# =========================
# TOGGLES / SETTINGS
# =========================
JS_ONLY = False  # True = generate skins.js only (no cookie/auth/downloads)
WRITE_FAILED_JSON_IN_JS_ONLY = False  # if JS_ONLY=True, still write failed.json (usually False)

SAVE_TEXTURE_PACK = False  # False = do NOT download/include TexturePack
OUTPUT_TEXTURES_DIR = "textures"
OUTPUT_JS_FILE = "skins.js"
FAILED_FILE = "failed.json"

# ✅ NEW: remap weapon keys using input JSON's weaponDisplay map
REMAP_WEAPON_KEYS_FROM_JSON = True
WEAPON_DISPLAY_FALLBACK_TO_ORIGINAL = True  # if no mapping found, keep original weapon key

# Variant ordering you wanted
VARIANT_ORDER = ["FN", "MW", "FT", "WW", "BS"]

# Factors order in skins.js (TexturePack only if toggle True)
MAP_KEYS_FOR_FACTORS = ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"] + (
    ["TexturePack"] if SAVE_TEXTURE_PACK else []
)

# =========================
# COOKIE FROM cookie.txt (OPTIONAL IF JS_ONLY)
# =========================
COOKIE_FILE = Path("cookie.txt")
ROBLOX_COOKIE = ""

if not JS_ONLY:
    if not COOKIE_FILE.exists():
        print("ERROR: cookie.txt not found.")
        print("Create cookie.txt and paste your .ROBLOSECURITY value inside (one line).")
        sys.exit(1)

    ROBLOX_COOKIE = COOKIE_FILE.read_text(encoding="utf-8").strip()
    if not ROBLOX_COOKIE:
        print("ERROR: cookie.txt is empty.")
        sys.exit(1)

# =========================
# RARITY FROM COLOR (RGB 0-255) — CUSTOM TABLE
# =========================
RARITY_TABLE = [
    ("yellow", {"min": [235, 154, 37], "max": [255, 194, 77]}),
    ("red", {"min": [215, 55, 55], "max": [255, 95, 95]}),
    ("pink", {"min": [191, 26, 210], "max": [231, 66, 250]}),
    ("purple", {"min": [116, 51, 235], "max": [156, 91, 255]}),
    ("blue", {"min": [55, 85, 235], "max": [95, 125, 255]}),
    ("lightblue", {"min": [74, 132, 197], "max": [114, 172, 237]}),
    ("gray", {"min": [156, 175, 197], "max": [196, 215, 237]}),
]
DEFAULT_RARITY = "gray"


def _in_range(v, lo, hi):
    if lo is not None and v < lo:
        return False
    if hi is not None and v > hi:
        return False
    return True


def rarity_from_color(rgb):
    """
    rgb: [R,G,B] where each is 0..255
    Uses RARITY_TABLE (first match wins).
    """
    if not (isinstance(rgb, list) and len(rgb) >= 3):
        return DEFAULT_RARITY

    r, g, b = rgb[0], rgb[1], rgb[2]

    for name, rule in RARITY_TABLE:
        lo = rule.get("min") or [None, None, None]
        hi = rule.get("max") or [None, None, None]

        if (
            _in_range(r, lo[0], hi[0])
            and _in_range(g, lo[1], hi[1])
            and _in_range(b, lo[2], hi[2])
        ):
            return name

    return DEFAULT_RARITY


def pick_skin_color(conditions_dict):
    """
    conditions_dict: {"Default": {...}, "FN": {...}} etc
    Returns a color array [R,G,B] or None
    """
    if not isinstance(conditions_dict, dict):
        return None

    if "Default" in conditions_dict and isinstance(conditions_dict["Default"], dict):
        c = conditions_dict["Default"].get("Color")
        if isinstance(c, list) and len(c) >= 3:
            return c

    for _, maps in conditions_dict.items():
        if isinstance(maps, dict):
            c = maps.get("Color")
            if isinstance(c, list) and len(c) >= 3:
                return c

    return None


# =========================
# ROBLOX DOWNLOAD CONSTANTS
# =========================
ASSET_ID_RE = re.compile(r"(?:rbxassetid://|rbxassetid:\/*)(\d+)")
ASSET_URL = "https://assetdelivery.roblox.com/v1/asset/?id={id}"


def sanitize_folder(name: str) -> str:
    name = (name or "").strip()
    name = re.sub(r'[<>:"/\\|?*\x00-\x1F]', "_", name)
    return name


def sanitize_id(name: str) -> str:
    return (name or "").lower().replace(" ", "")


def extract_id(asset):
    if not asset:
        return None
    m = ASSET_ID_RE.search(str(asset))
    return m.group(1) if m else None


def ensure_dir(p: Path):
    p.mkdir(parents=True, exist_ok=True)


def looks_like_html(resp: requests.Response) -> bool:
    ct = (resp.headers.get("Content-Type") or "").lower()
    if "text/html" in ct:
        return True
    head = resp.content[:150].lstrip().lower()
    return head.startswith(b"<!doctype html") or head.startswith(b"<html")


def build_session() -> requests.Session:
    s = requests.Session()
    s.headers.update(
        {
            "User-Agent": "roblox-texture-downloader",
            "Accept": "*/*",
            "Cookie": f".ROBLOSECURITY={ROBLOX_COOKIE}",
        }
    )
    return s


def auth_probe(session: requests.Session):
    url = "https://users.roblox.com/v1/users/authenticated"
    try:
        r = session.get(url, timeout=20)
        print("[AUTH PROBE]", r.status_code, r.text[:200])
    except Exception as e:
        print("[AUTH PROBE] request_error:", e)


def download_asset(session: requests.Session, asset_id: str, out_path: Path):
    try:
        r = session.get(ASSET_URL.format(id=asset_id), allow_redirects=True, timeout=30)
    except Exception as e:
        return False, f"request_error: {e}"

    if r.status_code in (401, 403):
        return False, f"auth_{r.status_code}"

    if r.status_code >= 400:
        return False, f"http_{r.status_code}"

    if looks_like_html(r):
        return False, "html_auth"

    ensure_dir(out_path.parent)
    out_path.write_bytes(r.content)
    return True, "ok"


def js_escape_string(s: str) -> str:
    return (s or "").replace("\\", "\\\\").replace('"', '\\"')


def write_skins_js(config: dict, out_path: Path):
    lines = []
    lines.append("const skins = {")

    weapons = list(config.keys())
    for wi, weapon in enumerate(weapons):
        weapon_obj = config[weapon]
        lines.append(f'  "{js_escape_string(weapon)}": {{')

        skin_names = list(weapon_obj.keys())
        for si, skin in enumerate(skin_names):
            skin_obj = weapon_obj[skin]
            variants = skin_obj["variants"]
            factors = skin_obj["factors"]
            settings = skin_obj["settings"]

            v_str = ", ".join([f'"{js_escape_string(v)}"' for v in variants])
            f_str = ", ".join([f'"{js_escape_string(f)}"' for f in factors])

            settings_line = (
                f'settings: {{skinId: "{js_escape_string(settings["skinId"])}", '
                f'collection: "{js_escape_string(settings["collection"])}", '
                f'rarity: "{js_escape_string(settings["rarity"])}"}}'
            )

            lines.append(f'    "{js_escape_string(skin)}": {{')
            lines.append(f"      variants: [{v_str}],")
            lines.append(f"      factors: [{f_str}],")
            lines.append(f"      {settings_line}")
            lines.append(f"    }}{',' if si != len(skin_names)-1 else ''}")

        lines.append(f"  }}{',' if wi != len(weapons)-1 else ''}")

    lines.append("}")
    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main():
    if len(sys.argv) < 2:
        print("Usage: python all_in_one.py input.json [--retry]")
        sys.exit(1)

    json_path = Path(sys.argv[1])
    retry_only = "--retry" in sys.argv

    data = json.loads(json_path.read_text(encoding="utf-8"))

    weapon_types = data.get("weaponTypes", {})
    if not isinstance(weapon_types, dict):
        print("ERROR: input JSON must contain { weaponTypes: {...} }")
        sys.exit(1)

    # ✅ Load weaponDisplay mapping from input JSON
    weapon_display = data.get("weaponDisplay", {})
    if REMAP_WEAPON_KEYS_FROM_JSON and not isinstance(weapon_display, dict):
        weapon_display = {}

    def remap_weapon_key(weapon_key: str) -> str:
        if not REMAP_WEAPON_KEYS_FROM_JSON:
            return weapon_key
        mapped = weapon_display.get(weapon_key)
        if mapped:
            return mapped
        return weapon_key if WEAPON_DISPLAY_FALLBACK_TO_ORIGINAL else ""

    out_textures = Path(OUTPUT_TEXTURES_DIR)
    out_js = Path(OUTPUT_JS_FILE)
    failed_path = Path(FAILED_FILE)

    failures = []
    total_assets = 0
    downloaded = 0
    skipped_existing = 0

    js_config = {}

    session = None
    if not JS_ONLY:
        print("Cookie loaded:", ROBLOX_COOKIE[:30] + "...", "(len:", len(ROBLOX_COOKIE), ")")
        session = build_session()
        auth_probe(session)
    else:
        print("[JS_ONLY] Skipping cookie/auth/downloads.")

    # Load previous failures for retry mode (downloads only)
    prev_keys = set()
    if (not JS_ONLY) and retry_only and failed_path.exists():
        prev_failed = json.loads(failed_path.read_text(encoding="utf-8"))
        prev_keys = {item.get("key") for item in prev_failed if "key" in item}
        print(f"[RETRY] Loaded {len(prev_keys)} failed entries from {FAILED_FILE}")
    elif JS_ONLY and retry_only:
        print("[JS_ONLY] --retry ignored (downloads disabled).")

    for weapon_key, skins in weapon_types.items():
        if not isinstance(skins, dict):
            continue

        weapon_name = remap_weapon_key(weapon_key)
        if not weapon_name:
            continue

        js_config.setdefault(weapon_name, {})

        for skin, conditions in skins.items():
            if not isinstance(conditions, dict):
                continue

            # -------------------------
            # Build JS entry
            # -------------------------
            variants_found = set()
            factors_found = set()

            for cond, maps in conditions.items():
                if cond != "Default":
                    variants_found.add(cond)
                if isinstance(maps, dict):
                    for k in maps.keys():
                        if (not SAVE_TEXTURE_PACK) and k == "TexturePack":
                            continue
                        if k == "Color":
                            continue
                        factors_found.add(k)

            if not variants_found:
                variants_list = ["FN"]
            else:
                variants_list = [v for v in VARIANT_ORDER if v in variants_found] + sorted(
                    [v for v in variants_found if v not in VARIANT_ORDER]
                )

            base = [k for k in MAP_KEYS_FOR_FACTORS if k in factors_found]
            extra = sorted([k for k in factors_found if k not in MAP_KEYS_FOR_FACTORS])
            factors_list = base + extra

            rgb = pick_skin_color(conditions)
            rarity = rarity_from_color(rgb) if rgb else DEFAULT_RARITY

            js_config[weapon_name][skin] = {
                "variants": variants_list,
                "factors": factors_list,
                "settings": {"skinId": sanitize_id(skin), "collection": "Unknown", "rarity": rarity},
            }

            # -------------------------
            # Download assets (SKIPPED if JS_ONLY)
            # -------------------------
            if JS_ONLY:
                continue

            for cond, maps in conditions.items():
                if not isinstance(maps, dict):
                    continue

                for map_name, asset_ref in maps.items():
                    if map_name == "Color":
                        continue
                    if (not SAVE_TEXTURE_PACK) and map_name == "TexturePack":
                        continue

                    asset_id = extract_id(asset_ref)
                    if not asset_id:
                        continue

                    key = f"{weapon_name}|{skin}|{cond}|{map_name}|{asset_id}"
                    if retry_only and key not in prev_keys:
                        continue

                    w_folder = sanitize_folder(weapon_name)
                    s_folder = sanitize_folder(skin)
                    c_folder = sanitize_folder(cond)

                    safe_skin_id = sanitize_id(skin)
                    safe_map = sanitize_id(map_name)
                    safe_cond = sanitize_id(cond)

                    if str(cond).lower() == "default":
                        filename = f"{safe_skin_id}_{safe_map}.png"
                    else:
                        filename = f"{safe_skin_id}{safe_cond}_{safe_map}.png"

                    out_path = out_textures / w_folder / s_folder / c_folder / filename

                    if out_path.exists() and out_path.stat().st_size > 0:
                        skipped_existing += 1
                        continue

                    total_assets += 1
                    ok, reason = download_asset(session, asset_id, out_path)
                    if ok:
                        downloaded += 1
                        print(f"[OK] {weapon_name}/{skin}/{cond}/{map_name} id={asset_id}")
                    else:
                        failures.append(
                            {
                                "key": key,
                                "weapon": weapon_name,
                                "skin": skin,
                                "condition": cond,
                                "map": map_name,
                                "assetId": asset_id,
                                "reason": reason,
                            }
                        )
                        print(f"[FAIL][{reason}] {weapon_name}/{skin}/{cond}/{map_name} id={asset_id}")

    # Write outputs
    if (not JS_ONLY) or WRITE_FAILED_JSON_IN_JS_ONLY:
        failed_path.write_text(json.dumps(failures, indent=2), encoding="utf-8")

    write_skins_js(js_config, out_js)

    print("\n──────── SUMMARY ────────")
    print(f"JS_ONLY                   : {JS_ONLY}")
    print(f"REMAP_WEAPON_KEYS_FROM_JSON: {REMAP_WEAPON_KEYS_FROM_JSON}")
    print(f"SAVE_TEXTURE_PACK         : {SAVE_TEXTURE_PACK}")
    print(f"JS config generated       : {out_js.resolve()}")

    if not JS_ONLY:
        print(f"Textures downloaded       : {downloaded}/{total_assets} (attempted)")
        print(f"Already existed           : {skipped_existing}")
        print(f"Failures                  : {len(failures)} (see {FAILED_FILE})")
        print(f"Textures folder           : {out_textures.resolve()}")
        if retry_only:
            print("Mode                      : --retry (only tried previous failures)")


if __name__ == "__main__":
    main()
