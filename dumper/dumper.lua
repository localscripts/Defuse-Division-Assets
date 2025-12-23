-- =========================
-- TOGGLES
-- =========================
local INCLUDE_WEARS = false
local FIND_TIMEOUT_SEC = 10 -- wait up to this long for Skins to exist

-- =========================
-- CONFIG
-- =========================
local MAP_PROPS = {
	"ColorMap",
	"MetalnessMap",
	"NormalMap",
	"RoughnessMap",
	"EmissiveMaskContent",
	"TexturePack",
}

-- =========================
-- COUNTERS
-- =========================
local totalSkins = 0
local skinsWithConditions = 0
local totalConditionVariants = 0
local totalAssetIds = 0

-- =========================
-- SERVICES
-- =========================
local HttpService = game:GetService("HttpService")

-- =========================
-- JSON SAFE HELPERS
-- =========================
-- Tag arrays so toJsonSafe() outputs JSON arrays ([...]) instead of objects ({"1":...})
local function jsonArray(tbl)
	tbl.__jsonArray = true
	return tbl
end

local function color3To255Array(c)
	return jsonArray({
		math.floor(c.R * 255 + 0.5),
		math.floor(c.G * 255 + 0.5),
		math.floor(c.B * 255 + 0.5),
	})
end

local function extractAsset(value)
	if value == nil then return nil end
	local s = tostring(value)
	return s:match("(rbxassetid://%d+)") or s:match("(rbxasset://[^%s]+)")
end

local function safeGet(obj, prop)
	local ok, val = pcall(function()
		return obj[prop]
	end)
	return ok and val or nil
end

-- Convert any value to JSON-safe types
local function toJsonSafe(v)
	local t = typeof(v)

	if v == nil then
		return nil
	elseif t == "string" or t == "number" or t == "boolean" then
		return v
	elseif t == "Color3" then
		return color3To255Array(v)
	elseif t == "table" then
		-- If tagged as array, preserve numeric order 1..#v and output JSON array
		if v.__jsonArray == true then
			local arr = {}
			for i = 1, #v do
				arr[i] = toJsonSafe(v[i])
			end
			return arr
		end

		-- Otherwise treat as object/map (JSON object)
		local out = {}
		for k, vv in pairs(v) do
			-- JSON keys must be strings
			local kk = tostring(k)
			-- skip internal marker if someone forgot to tag properly
			if kk ~= "__jsonArray" then
				out[kk] = toJsonSafe(vv)
			end
		end
		return out
	else
		-- Instances / userdata / enums / content objects etc.
		return tostring(v)
	end
end

-- =========================
-- FIND TEXTURE (SurfaceAppearance)
-- =========================
local function findTextureSA(container)
	local tex = container:FindFirstChild("Texture")
	if tex and tex:IsA("SurfaceAppearance") then return tex end
	for _, d in ipairs(container:GetDescendants()) do
		if d:IsA("SurfaceAppearance") then return d end
	end
	return nil
end

local function condShort(name)
	local n = name:lower()
	if n:find("battle", 1, true) and n:find("scar", 1, true) then return "BS" end
	if n:find("factory", 1, true) and n:find("new", 1, true) then return "FN" end
	if n:find("field", 1, true) and n:find("test", 1, true) then return "FT" end
	if n:find("minimal", 1, true) and n:find("wear", 1, true) then return "MW" end
	if n:find("well", 1, true) and n:find("worn", 1, true) then return "WW" end
	return name:gsub("%s+", "")
end

local function getPropsFromSA(sa)
	local out = {}
	if not sa then return out end

	-- Color as [R,G,B]
	local col = safeGet(sa, "Color")
	if typeof(col) == "Color3" then
		out.Color = color3To255Array(col)
	end

	-- Asset-backed maps
	for _, prop in ipairs(MAP_PROPS) do
		local asset = extractAsset(safeGet(sa, prop))
		if asset then
			totalAssetIds += 1
			out[prop] = asset
		end
	end

	return out
end

-- =========================
-- AUTO-DETECT: <root>.Import.Assets.Skins
-- =========================
local function tryFindSkinsOnce()
	for idx, root in ipairs(game:GetChildren()) do
		local import = root:FindFirstChild("Import")
		local assets = import and import:FindFirstChild("Assets")
		local skins = assets and assets:FindFirstChild("Skins")
		if skins and skins:IsA("Folder") then
			return skins, root, idx
		end
	end
	return nil
end

local function autoFindSkins(timeoutSec)
	local start = os.clock()
	while os.clock() - start < timeoutSec do
		local skins, root, idx = tryFindSkinsOnce()
		if skins then
			print(("✅ Found Skins at game:GetChildren()[%d].Import.Assets.Skins  (%s)"):format(idx, skins:GetFullName()))
			return skins, root, idx
		end
		task.wait(0.25)
	end
	warn("❌ Could not find any <root>.Import.Assets.Skins within timeout.")
	return nil
end

-- =========================
-- MAIN
-- =========================
local skins, root, rootIndex = autoFindSkins(FIND_TIMEOUT_SEC)
if not skins then
	return
end

local output = {
	weaponTypes = {},
	summary = {},
}

local weaponFolders = skins:GetChildren()

for _, weapon in ipairs(weaponFolders) do
	if weapon:IsA("Folder") then
		local weaponName = weapon.Name
		output.weaponTypes[weaponName] = output.weaponTypes[weaponName] or {}

		for _, skin in ipairs(weapon:GetChildren()) do
			if skin:IsA("Folder") then
				totalSkins += 1

				local skinName = skin.Name
				output.weaponTypes[weaponName][skinName] = output.weaponTypes[weaponName][skinName] or {}

				local conditions = {}

				if INCLUDE_WEARS then
					local wears = skin:FindFirstChild("Wears")
					if wears and wears:IsA("Folder") then
						for _, c in ipairs(wears:GetChildren()) do
							if c:IsA("Folder") then
								table.insert(conditions, c)
							end
						end
					end

					if #conditions > 0 then
						skinsWithConditions += 1
						totalConditionVariants += #conditions
					else
						conditions = { "__DEFAULT__" }
					end
				else
					conditions = { "__DEFAULT__" }
				end

				for _, cond in ipairs(conditions) do
					local condKey, sa
					if cond == "__DEFAULT__" then
						condKey = "Default"
						sa = findTextureSA(skin)
					else
						condKey = condShort(cond.Name)
						sa = findTextureSA(cond)
					end

					local props = getPropsFromSA(sa)

					-- only store if has something
					if next(props) ~= nil then
						-- ensure JSON safe (Color becomes [R,G,B])
						output.weaponTypes[weaponName][skinName][condKey] = toJsonSafe(props)
					end
				end

				if next(output.weaponTypes[weaponName][skinName]) == nil then
					output.weaponTypes[weaponName][skinName] = nil
				end
			end
		end

		if next(output.weaponTypes[weaponName]) == nil then
			output.weaponTypes[weaponName] = nil
		end
	end
end

output.summary = {
	includeWears = INCLUDE_WEARS,
	rootIndex = rootIndex,
	rootName = root.Name,
	foundSkinsPath = skins:GetFullName(),
	weaponTypes = #weaponFolders,
	skinsTotal = totalSkins,
	skinsWithConditions = skinsWithConditions,
	conditionVariantsTotal = totalConditionVariants,
	assetIdsTotal = totalAssetIds,
}

-- Final sanitize whole output (extra safety)
local safeOutput = toJsonSafe(output)

local ok, jsonOrErr = pcall(function()
	return HttpService:JSONEncode(safeOutput)
end)

if not ok then
	warn("❌ JSONEncode failed:", jsonOrErr)
	print("Debug summary:", safeOutput.summary and HttpService:JSONEncode(safeOutput.summary) or "no summary")
	return
end

local json = jsonOrErr

if typeof(setclipboard) == "function" then
	setclipboard(json)
	print("Copied JSON to clipboard. Bytes:", #json)
else
	warn("setclipboard() not available. Printing JSON instead:")
	print(json)
end
