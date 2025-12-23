const ROOT = "https://raw.githubusercontent.com/localscripts/Defuse-Division-Assets/refs/heads/main";

const M = `${ROOT}/models`;
const T = `${ROOT}/textures`;
const C = `${ROOT}/collections`;
const B = `${ROOT}/backgrounds`;

// Collections
const collections = {
  "Seaside": `${C}/seaside.png`,
  "Alpha": `${C}/alpha.png`
};

const backgrounds = {
  "Ancient Side": `${B}/videos/Ancient_Night1.mp4`,
  "Ancient Test": `${B}/videos/Ancient_Night2.mp4`
};

const rarity = {
  "yellow": "#FFAE39",     // Contraband
  "red": "#EB4B4B",        // Covert | Knives
  "pink": "#D32EE6",       // Classified
  "purple": "#8847FF",     // Restricted
  "blue": "#4B69FF",       // Mil-Spec Skins
  "lightblue": "#5E98D9",  // Industrial Grade
  "gray": "#B0C3D9"        // Consumer Grade
};

// Skins
const skins = {
  "AK-47": {
    "Alpha": {
      "variants": ["FN", "MW", "FT", "WW", "BS"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "alpha", collection: "Alpha", rarity: "red"}
    }
  },
    "MAC-10": {
    "Glitched": {
      "variants": ["FN"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "glitched", collection: "Alpha", rarity: "blue"}
    }
  },
    "XM1014": {
    "Steel Wave": {
      "variants": ["FN", "MW", "FT", "WW", "BS"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "steel wave", collection: "Alpha", rarity: "blue"}
    }
  },
   "MP9": {
    "Oxidized": {
      "variants": ["FN", "MW", "FT", "WW", "BS"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "oxidized", collection: "Alpha", rarity: "blue"}
    }
  },
  "Dual Berettas": {
    "Curio": {
      "variants": ["FN"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "curio", collection: "Alpha", rarity: "blue"}
    }
  },
  "MAC-10": {
    "Glitched": {
      "variants": ["FN"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "glitched", collection: "Alpha", rarity: "blue"}
    }
  },
  "Glock-18": {
    "Melon": {
      "variants": ["FN"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "melon", collection: "Alpha", rarity: "purple"}
    }
  },
 "P250": {
    "Thorned Stars": {
      "variants": ["FN"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "thorned stars", collection: "Alpha", rarity: "purple"}
    }
  },
   "SSG08": {
    "Brains & Bass": {
      "variants": ["FN", "MW", "FT", "WW", "BS"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "brains n bass", collection: "Alpha", rarity: "purple"}
    }
  },
  "AWP": {
    "Wave Check": {
      "variants": ["FN", "MW", "FT", "WW", "BS"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "wave check", collection: "Alpha", rarity: "pink"}
    }
  },
 "Desert Eagle": {
    "Aurion": {
      "variants": ["FN"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "aurion", collection: "Alpha", rarity: "pink"}
    }
  },
  "USP-S": {
    "Hypnotized": {
      "variants": ["FN"],
      "factors": ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      "settings": {skinId: "hypnotized", collection: "Alpha", rarity: "red"}
    }
  },
"Bayonet": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Butterfly": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Classic": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Falchion": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Flip": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Gut": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Huntsman": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Karambit": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Kukri": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"M9": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Navaja": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Skeleton": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Stiletto": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Talon": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},

"Ursus": {
  "Vanila": {
    "variants": ["FN"],
    "factors": ["ColorMap"],
    "settings": { skinId: "vanila", collection: "Knives", rarity: "red" }
  }
},
};


// Weapon models
const weapons = {
  "Machine Guns": {
    "M249": `${M}/weapon_mach_m249.obj`,
    "Negev": `${M}/weapon_mach_negev.obj`
  },

  "Pistols": {
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
    "USP-S": `${M}/weapon_pist_usp_silencer.obj`
  },

  "Rifles": {
    "AK-47": `${M}/weapon_rif_ak47.obj`,
    "AUG": `${M}/weapon_rif_aug.obj`,
    "FAMAS": `${M}/weapon_rif_famas.obj`,
    "Galil AR": `${M}/weapon_rif_galilar.obj`,
    "M4A1-S": `${M}/weapon_rif_m4a1_silencer.obj`,
    "M4A4": `${M}/weapon_rif_m4a4.obj`,
    "SG 553": `${M}/weapon_rif_sg556.obj`
  },

  "Shotguns": {
    "MAG-7": `${M}/weapon_shot_mag7.obj`,
    "Nova": `${M}/weapon_shot_nova.obj`,
    "Sawed-Off": `${M}/weapon_shot_sawedoff.obj`,
    "XM1014": `${M}/weapon_shot_xm1014.obj`
  },

  "SMGs": {
    "PP-Bizon": `${M}/weapon_smg_bizon.obj`,
    "MAC-10": `${M}/weapon_smg_mac10.obj`,
    "MP5-SD": `${M}/weapon_smg_mp5sd.obj`,
    "MP7": `${M}/weapon_smg_mp7.obj`,
    "MP9": `${M}/weapon_smg_mp9.obj`,
    "P90": `${M}/weapon_smg_p90.obj`,
    "UMP-45": `${M}/weapon_smg_ump45.obj`
  },

  "Snipers": {
    "AWP": `${M}/weapon_snip_awp.obj`,
    "G3SG1": `${M}/weapon_snip_g3sg1.obj`,
    "SCAR-20": `${M}/weapon_snip_scar20.obj`,
    "SSG08": `${M}/weapon_snip_ssg08.obj`
  },

"Knives": {
    "Bayonet": `${M}/weapon_knife_bayonet.obj`,
    "Butterfly": `${M}/weapon_knife_butterfly.obj`,
    "Classic": `${M}/weapon_knife_classic.obj`,
    "Falchion": `${M}/weapon_knife_falchion.obj`,
    "Flip": `${M}/weapon_knife_flip.obj`,
    "Gut": `${M}/weapon_knife_gut.obj`,
    "Huntsman": `${M}/weapon_knife_huntsman.obj`,
    "Karambit": `${M}/weapon_knife_karambit.obj`,
    "Kukri": `${M}/weapon_knife_kukri.obj`,
    "M9": `${M}/weapon_knife_m9.obj`,
    "Navaja": `${M}/weapon_knife_navaja.obj`,
    "Skeleton": `${M}/weapon_knife_skeleton.obj`,
    "Stiletto": `${M}/weapon_knife_stiletto.obj`,
    "Talon": `${M}/weapon_knife_talon.obj`,
    "Ursus": `${M}/weapon_knife_ursus.obj`,
},

};














