const ROOT = "https://raw.githubusercontent.com/localscripts/Defuse-Division-Assets/refs/heads/main";

const M = `${ROOT}/models`;
const T = `${ROOT}/textures`;
const C = `${ROOT}/collections`;
const B = `${ROOT}/backgrounds`;

// Collections
const collections = {
  "Seaside": `${C}/seaside.png`,
  "Alpha": `${C}/alpha.png`,
  "Knife": `${C}/knife.png`
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

const skins = {
  "Glock-18": {
    "Melon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "melon", collection: "Unknown", rarity: "gray"}
    },
    "Fiori Dorati": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "fioridorati", collection: "Unknown", rarity: "gray"}
    },
    "Beach Break": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap"],
      settings: {skinId: "beachbreak", collection: "Unknown", rarity: "gray"}
    },
    "Spirit": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "spirit", collection: "Unknown", rarity: "gray"}
    },
    "Heartline": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "heartline", collection: "Unknown", rarity: "gray"}
    }
  },
  "Zeus x27": {
    "Medic": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "medic", collection: "Unknown", rarity: "gray"}
    }
  },
  "MP9": {
    "Oxidized": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "oxidized", collection: "Unknown", rarity: "gray"}
    }
  },
  "Gut": {
    "Poison Fangs": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "poisonfangs", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Gamma Doppler Phase 1": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "gammadopplerphase1", collection: "Unknown", rarity: "gray"}
    }
  },
  "Stiletto": {
    "Marble Fade": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "marblefade", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 1": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase1", collection: "Unknown", rarity: "gray"}
    }
  },
  "Skeleton": {
    "Marble Fade": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "marblefade", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 1": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase1", collection: "Unknown", rarity: "gray"}
    }
  },
  "Galil AR": {
    "Phoenix": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "phoenix", collection: "Unknown", rarity: "gray"}
    }
  },
  "MAG-7": {
    "Dusty": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dusty", collection: "Unknown", rarity: "gray"}
    },
    "Docks Patrol": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dockspatrol", collection: "Unknown", rarity: "gray"}
    }
  },
  "tactical": {
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    }
  },
  "Bayonet": {
    "Booster": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "booster", collection: "Unknown", rarity: "gray"}
    },
    "Hieroglyphics": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "hieroglyphics", collection: "Unknown", rarity: "gray"}
    }
  },
  "P250": {
    "Thorned Stars": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "thornedstars", collection: "Unknown", rarity: "gray"}
    }
  },
  "Tec-9": {
    "Industrial Danger": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "industrialdanger", collection: "Unknown", rarity: "gray"}
    }
  },
  "MP7": {
    "LifeGuard": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "lifeguard", collection: "Unknown", rarity: "gray"}
    }
  },
  "Butterfly": {
    "Doppler Emerald": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "doppleremerald", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Purple Dream": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "dopplerpurpledream", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Gamma Doppler Phase 4": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "gammadopplerphase4", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Gamma Phase 10": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "gammaphase10", collection: "Unknown", rarity: "gray"}
    },
    "Hieroglyphics": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "hieroglyphics", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Ruby": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "dopplerruby", collection: "Unknown", rarity: "gray"}
    }
  },
  "SSG08": {
    "Relic": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "relic", collection: "Unknown", rarity: "gray"}
    },
    "Spartan": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "spartan", collection: "Unknown", rarity: "gray"}
    },
    "Brains & Bass": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "brains&bass", collection: "Unknown", rarity: "gray"}
    }
  },
  "AWP": {
    "Jack o' Sniper": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap"],
      settings: {skinId: "jacko'sniper", collection: "Unknown", rarity: "gray"}
    },
    "Leviathan": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "leviathan", collection: "Unknown", rarity: "gray"}
    },
    "Dezerthus": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dezerthus", collection: "Unknown", rarity: "gray"}
    },
    "Kicius": {
      variants: ["FN"],
      factors: ["ColorMap"],
      settings: {skinId: "kicius", collection: "Unknown", rarity: "gray"}
    },
    "Wave Check": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "wavecheck", collection: "Unknown", rarity: "gray"}
    }
  },
  "Ursus": {
    "Doppler Emerald": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "doppleremerald", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Marble Fade": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "marblefade", collection: "Unknown", rarity: "gray"}
    }
  },
  "M4A4": {
    "Booster": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "booster", collection: "Unknown", rarity: "gray"}
    },
    "Charcoal Print": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "charcoalprint", collection: "Unknown", rarity: "gray"}
    },
    "Chrome Print": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "chromeprint", collection: "Unknown", rarity: "gray"}
    },
    "LIBERTYWALK": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "libertywalk", collection: "Unknown", rarity: "gray"}
    }
  },
  "Desert Eagle": {
    "Dune Serpant": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "duneserpant", collection: "Unknown", rarity: "gray"}
    },
    "Black Widow": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "blackwidow", collection: "Unknown", rarity: "gray"}
    },
    "Test": {
      variants: ["FN"],
      factors: ["ColorMap", "NormalMap"],
      settings: {skinId: "test", collection: "Unknown", rarity: "gray"}
    },
    "Aurion": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "aurion", collection: "Unknown", rarity: "gray"}
    },
    "Sunken Treasure": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "sunkentreasure", collection: "Unknown", rarity: "gray"}
    }
  },
  "canis": {
    "Doppler BlackPearl": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerblackpearl", collection: "Unknown", rarity: "gray"}
    },
    "Cyan Waves": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "cyanwaves", collection: "Unknown", rarity: "gray"}
    },
    "Marble Fade": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "marblefade", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Emerald": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "doppleremerald", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 1": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase1", collection: "Unknown", rarity: "gray"}
    },
    "Purple Guy": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "purpleguy", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 4": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase4", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Gamma Doppler Phase 4": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "gammadopplerphase4", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 3": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase3", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 2": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase2", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Ruby": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerruby", collection: "Unknown", rarity: "gray"}
    }
  },
  "Nova": {
    "Desert": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "desert", collection: "Unknown", rarity: "gray"}
    },
    "Dunes": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dunes", collection: "Unknown", rarity: "gray"}
    },
    "Trout": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "trout", collection: "Unknown", rarity: "gray"}
    }
  },
  "P90": {
    "Wavey": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "wavey", collection: "Unknown", rarity: "gray"}
    }
  },
  "Dual Berettas": {
    "LightHouse": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "lighthouse", collection: "Unknown", rarity: "gray"}
    },
    "Desert": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "desert", collection: "Unknown", rarity: "gray"}
    },
    "Curio": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "curio", collection: "Unknown", rarity: "gray"}
    }
  },
  "MAC-10": {
    "Glitched": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "glitched", collection: "Unknown", rarity: "gray"}
    },
    "Jelly-Fish": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "jelly-fish", collection: "Unknown", rarity: "gray"}
    }
  },
  "Karambit": {
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 2": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase2", collection: "Unknown", rarity: "gray"}
    }
  },
  "push": {
    "Gamma Doppler Phase 1": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "gammadopplerphase1", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Gamma Doppler Phase 4": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "gammadopplerphase4", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 2": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase2", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 1": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase1", collection: "Unknown", rarity: "gray"}
    }
  },
  "M4A1-S": {
    "Chrome Print": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "chromeprint", collection: "Unknown", rarity: "gray"}
    },
    "Moonlight": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "moonlight", collection: "Unknown", rarity: "gray"}
    },
    "Original Gamer": {
      variants: ["FN"],
      factors: ["ColorMap"],
      settings: {skinId: "originalgamer", collection: "Unknown", rarity: "gray"}
    },
    "Abyssus": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "abyssus", collection: "Unknown", rarity: "gray"}
    }
  },
  "UMP-45": {
    "Kobold Fire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "koboldfire", collection: "Unknown", rarity: "gray"}
    },
    "Megaladon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "megaladon", collection: "Unknown", rarity: "gray"}
    },
    "Barnacles": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "barnacles", collection: "Unknown", rarity: "gray"}
    }
  },
  "XM1014": {
    "Steel Wave": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "steelwave", collection: "Unknown", rarity: "gray"}
    }
  },
  "AK-47": {
    "DoodleAWhite": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "doodleawhite", collection: "Unknown", rarity: "gray"}
    },
    "Well Worn": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "wellworn", collection: "Unknown", rarity: "gray"}
    },
    "Sandsoul": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "sandsoul", collection: "Unknown", rarity: "gray"}
    },
    "HorribleV2": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "horriblev2", collection: "Unknown", rarity: "gray"}
    },
    "VantaBlack": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "vantablack", collection: "Unknown", rarity: "gray"}
    },
    "Booster": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "booster", collection: "Unknown", rarity: "gray"}
    },
    "Ignark": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "ignark", collection: "Unknown", rarity: "gray"}
    },
    "LIBERTYWALK": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "libertywalk", collection: "Unknown", rarity: "gray"}
    },
    "Horrible": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "horrible", collection: "Unknown", rarity: "gray"}
    },
    "Vanta Black": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "vantablack", collection: "Unknown", rarity: "gray"}
    },
    "Veteran": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "veteran", collection: "Unknown", rarity: "gray"}
    },
    "DoodleAJob": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "doodleajob", collection: "Unknown", rarity: "gray"}
    },
    "Baddie Wit Da Flowers": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap"],
      settings: {skinId: "baddiewitdaflowers", collection: "Unknown", rarity: "gray"}
    },
    "Frost Beast": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "frostbeast", collection: "Unknown", rarity: "gray"}
    },
    "Cody Special": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "codyspecial", collection: "Unknown", rarity: "gray"}
    },
    "Alpha": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "alpha", collection: "Unknown", rarity: "gray"}
    }
  },
  "USP-S": {
    "Baddie Wit Da Flowers": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "baddiewitdaflowers", collection: "Unknown", rarity: "gray"}
    },
    "Hypnotized": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "hypnotized", collection: "Unknown", rarity: "gray"}
    },
    "Firefox": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "firefox", collection: "Unknown", rarity: "gray"}
    },
    "LIBERTYWALK": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "libertywalk", collection: "Unknown", rarity: "gray"}
    },
    "Fluctus": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "fluctus", collection: "Unknown", rarity: "gray"}
    },
    "Booster": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "booster", collection: "Unknown", rarity: "gray"}
    },
    "Sand Storm": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "sandstorm", collection: "Unknown", rarity: "gray"}
    },
    "Green Marble": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "greenmarble", collection: "Unknown", rarity: "gray"}
    }
  },
  "Talon": {
    "Doppler Emerald": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "doppleremerald", collection: "Unknown", rarity: "gray"}
    },
    "Sea Drift": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "seadrift", collection: "Unknown", rarity: "gray"}
    },
    "Blood Moon": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "bloodmoon", collection: "Unknown", rarity: "gray"}
    },
    "Marble Fade": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "marblefade", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Sapphire": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplersapphire", collection: "Unknown", rarity: "gray"}
    },
    "Hieroghlyphics SE": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "hieroghlyphicsse", collection: "Unknown", rarity: "gray"}
    },
    "Doppler Phase 1": {
      variants: ["FN"],
      factors: ["ColorMap", "MetalnessMap", "NormalMap", "RoughnessMap"],
      settings: {skinId: "dopplerphase1", collection: "Unknown", rarity: "gray"}
    }
  }
}





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


















