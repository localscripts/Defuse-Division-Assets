const ROOT = "https://raw.githubusercontent.com/localscripts/Defuse-Division-Assets/refs/heads/main";

// Short aliases
const M = `${ROOT}/models`;
const T = `${ROOT}/textures`;
const C = `${ROOT}/collections`;

// Rarity
const rarity = {
  "yellow": "#FFAE39",     // Contraband
  "red": "#EB4B4B",        // Covert | Knives
  "pink": "#D32EE6",       // Classified
  "purple": "#8847FF",     // Restricted
  "blue": "#4B69FF",       // Mil-Spec Skins
  "lightblue": "#5E98D9",  // Industrial Grade
  "gray": "#B0C3D9"        // Consumer Grade
};


// Collections
const collections = {
  "Seaside": `${C}/seaside.png`,
  "Alpha": `${C}/alpha.png`
};

// Skins
const skins = {
"AK-47": {
  "Alpha": {
      "collection": "Alpha",
      "rarity": "red",
      "variants": {
        "FN": `${T}/ak-47/alpha/alphaFN.png`,
        "BS": `${T}/ak-47/alpha/alphaBS.png`
      }
    },
    "Test": {
      "collection": "Seaside",
      "variants": {
        "FN": `${T}/ak-47/alpha/alphaFN.png`,
        "BS": `${T}/ak-47/alpha/alphaBS.png`
      }
    },
  }
};


// Weapon models
const weapons = {
  // Machine guns
  "M249": `${M}/weapon_mach_m249.obj`,
  "Negev": `${M}/weapon_mach_negev.obj`,

  // Pistols
  "CZ75-Auto": `${M}/weapon_pist_cz75a.obj`,
  "Desert Eagle": `${M}/weapon_pist_deagle.obj`,
  "Dual Berettas": `${M}/weapon_pist_elite.obj`,
  "Five-SeveN": `${M}/weapon_pist_fiveseven.obj`,
  "Glock-18": `${M}/weapon_pist_glock18.obj`,
  "P2000": `${M}/weapon_pist_hkp2000.obj`,
  "P250": `${M}/weapon_pist_p250.obj`,
  "R8 Revolver": `${M}/weapon_pist_revolver.obj`,
  "Zeus x27": `${M}/weapon_pist_taser.obj`,
  "Tec-9": `${M}/weapon_pist_tec9.obj`,
  "USP-S": `${M}/weapon_pist_usp_silencer.obj`,

  // Rifles
  "AK-47": `${M}/weapon_rif_ak47.obj`,
  "AUG": `${M}/weapon_rif_aug.obj`,
  "FAMAS": `${M}/weapon_rif_famas.obj`,
  "Galil AR": `${M}/weapon_rif_galilar.obj`,
  "M4A1-S": `${M}/weapon_rif_m4a1_silencer.obj`,
  "M4A4": `${M}/weapon_rif_m4a4.obj`,
  "SG 553": `${M}/weapon_rif_sg556.obj`,

  // Shotguns
  "MAG-7": `${M}/weapon_shot_mag7.obj`,
  "Nova": `${M}/weapon_shot_nova.obj`,
  "Sawed-Off": `${M}/weapon_shot_sawedoff.obj`,
  "XM1014": `${M}/weapon_shot_xm1014.obj`,

  // SMGs
  "PP-Bizon": `${M}/weapon_smg_bizon.obj`,
  "MAC-10": `${M}/weapon_smg_mac10.obj`,
  "MP5-SD": `${M}/weapon_smg_mp5sd.obj`,
  "MP7": `${M}/weapon_smg_mp7.obj`,
  "MP9": `${M}/weapon_smg_mp9.obj`,
  "P90": `${M}/weapon_smg_p90.obj`,
  "UMP-45": `${M}/weapon_smg_ump45.obj`,

  // Snipers
  "AWP": `${M}/weapon_snip_awp.obj`,
  "G3SG1": `${M}/weapon_snip_g3sg1.obj`,
  "SCAR-20": `${M}/weapon_snip_scar20.obj`,
  "SSG 08": `${M}/weapon_snip_ssg08.obj`
};
