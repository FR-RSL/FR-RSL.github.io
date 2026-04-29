/**
 * Index des champions pour la recherche ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ FR RSL
 *
 * Pour AJOUTER un champion :
 *   Ajouter un objet dans le tableau CHAMPIONS avec les champs :
 *   { name, folder, faction, rarity, img (null si absente) }
 */

const FACTION_META = {
  faction01: { name: 'Seigneurs',              img: 'bannerlords.png'    },
  faction02: { name: 'Haut Elfes',             img: 'high-elves.png'     },
  faction03: { name: "Ordre SacrÃÂÃÂÃÂÃÂ©",            img: 'sacred-order.png'   },
  faction04: { name: 'Barbares',               img: 'barbarians.png'     },
  faction05: { name: 'Tribus Ogryn',           img: 'ogryn-tribes.png'   },
  faction06: { name: 'Homme LÃÂÃÂÃÂÃÂ©zards',          img: 'lizardmen.png'      },
  faction07: { name: 'Marcheurs de Peau',      img: 'skinwalkers.png'    },
  faction08: { name: 'Orcs',                   img: 'orcs.png'           },
  faction09: { name: 'Rejetons DÃÂÃÂÃÂÃÂ©moniaques',   img: 'demonspawn.png'     },
  faction10: { name: 'Morts-vivants',          img: 'undead-hordes.png'  },
  faction11: { name: 'Elfes Noirs',            img: 'dark-elves.png'     },
  faction12: { name: 'Revenants Chevaliers',   img: 'knight-revenant.png'},
  faction13: { name: 'Nains',                  img: 'dwarves.png'        },
  faction14: { name: "Clan de l'Ombre",        img: 'shadowkin.png'      },
  faction15: { name: 'Gardes Sylvains',        img: 'sylvan-watchers.png'},
  faction16: { name: 'Argonites',              img: 'argonites.png'      },
};

/** GÃÂÃÂÃÂÃÂ©nÃÂÃÂÃÂÃÂ¨re l'URL de la page champion depuis la racine du site */
function _url(faction, rarity, folder) {
  return `pages/factions/${faction}/${rarity}/${folder}/${folder}.html`;
}

/** GÃÂÃÂÃÂÃÂ©nÃÂÃÂÃÂÃÂ¨re le chemin de l'image portrait depuis la racine */
function _img(faction, rarity, folder) {
  return `pages/factions/${faction}/${rarity}/${folder}/assets/${folder}.png`;
}

const CHAMPIONS = [
  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 01 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Seigneurs ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Acelin',          faction: 'faction01', rarity: 'legendary', folder: 'acelin'         },
  { name: 'Adelyn',          faction: 'faction01', rarity: 'legendary', folder: 'adelyn'         },
  { name: 'Baron',           faction: 'faction01', rarity: 'legendary', folder: 'baron'          },
  { name: 'Champfort',       faction: 'faction01', rarity: 'legendary', folder: 'champfort'      },
  { name: 'Chevalier Noir',  faction: 'faction01', rarity: 'legendary', folder: 'chevalier_noir' },
  { name: 'Cillian',         faction: 'faction01', rarity: 'legendary', folder: 'cillian'        },
  { name: 'Helior',          faction: 'faction01', rarity: 'legendary', folder: 'helior'         },
  { name: 'Kaja',            faction: 'faction01', rarity: 'legendary', folder: 'kaja'           },
  { name: 'Lugan',           faction: 'faction01', rarity: 'legendary', folder: 'lugan'          },
  { name: 'Marichka',        faction: 'faction01', rarity: 'legendary', folder: 'marichka'       },
  { name: 'Michelangelo',    faction: 'faction01', rarity: 'legendary', folder: 'michelangelo'   },
  { name: 'Minaya',          faction: 'faction01', rarity: 'legendary', folder: 'minaya'         },
  { name: 'Quintus',         faction: 'faction01', rarity: 'legendary', folder: 'quintus'        },
  { name: 'Raglin',          faction: 'faction01', rarity: 'legendary', folder: 'raglin'         },
  { name: 'Rathalos',        faction: 'faction01', rarity: 'legendary', folder: 'rathalos'       },
  { name: 'Richtoff',        faction: 'faction01', rarity: 'legendary', folder: 'richtoff'       },
  { name: 'Ronda',           faction: 'faction01', rarity: 'legendary', folder: 'ronda'          },
  { name: 'Septimus',        faction: 'faction01', rarity: 'legendary', folder: 'septimus'       },
  { name: 'Sethallia',       faction: 'faction01', rarity: 'legendary', folder: 'sethallia'      },
  { name: 'Sigmund',         faction: 'faction01', rarity: 'legendary', folder: 'sigmund'        },
  { name: 'Staltus',         faction: 'faction01', rarity: 'legendary', folder: 'staltus'        },
  { name: 'Taras',           faction: 'faction01', rarity: 'legendary', folder: 'taras'          },
  { name: 'Timit',           faction: 'faction01', rarity: 'legendary', folder: 'timit'          },
  { name: 'Titus',           faction: 'faction01', rarity: 'legendary', folder: 'titus'          },
  { name: 'Androc',          faction: 'faction01', rarity: 'mythical',  folder: 'androc'         },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 03 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Ordre SacrÃÂÃÂÃÂÃÂ© ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Polara',          faction: 'faction03', rarity: 'mythical',  folder: 'polara'         },
  { name: 'Siegfrund',       faction: 'faction03', rarity: 'mythical',  folder: 'siegfrund'      },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 04 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Barbares ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Freyja',          faction: 'faction04', rarity: 'legendary', folder: 'freyja'         },
  { name: 'Loki',            faction: 'faction04', rarity: 'legendary', folder: 'loki'           },
  { name: 'Odin',            faction: 'faction04', rarity: 'legendary', folder: 'odin'           },
  { name: 'Raphael',         faction: 'faction04', rarity: 'legendary', folder: 'raphael'        },
  { name: 'Thor',            faction: 'faction04', rarity: 'legendary', folder: 'thor'           },
  { name: 'Alaz',            faction: 'faction04', rarity: 'mythical',  folder: 'alaz'           },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 06 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Homme LÃÂÃÂÃÂÃÂ©zards ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Donatello',       faction: 'faction06', rarity: 'legendary', folder: 'donatello'      },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 07 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Marcheurs de Peau ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Galleus',         faction: 'faction07', rarity: 'mythical',  folder: 'galleus'        },
  { name: 'Mezomel',         faction: 'faction07', rarity: 'mythical',  folder: 'mezomel'        },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 08 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Orcs ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: "Ash'nar",         faction: 'faction08', rarity: 'mythical',  folder: 'ashnar'         },
  { name: 'Gharol',          faction: 'faction08', rarity: 'mythical',  folder: 'gharol'         },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 09 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Rejetons DÃÂÃÂÃÂÃÂ©moniaques ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Candraphon',      faction: 'faction09', rarity: 'legendary', folder: 'candraphon'     },
  { name: 'Chat',            faction: 'faction09', rarity: 'legendary', folder: 'chat'           },
  { name: 'Comtesse Lix',    faction: 'faction09', rarity: 'legendary', folder: 'comtesse'       },
  { name: 'Drexthar',        faction: 'faction09', rarity: 'legendary', folder: 'drexthar'       },
  { name: 'Gracchos',        faction: 'faction09', rarity: 'legendary', folder: 'gracchos',  noImg: true },
  { name: 'Helicath',        faction: 'faction09', rarity: 'legendary', folder: 'helicath'       },
  { name: 'Hephraak',        faction: 'faction09', rarity: 'legendary', folder: 'hephraak'       },
  { name: 'Prince Kymar',    faction: 'faction09', rarity: 'legendary', folder: 'kymar'          },
  { name: 'Duchesse Lilitu', faction: 'faction09', rarity: 'legendary', folder: 'lilitu'         },
  { name: 'Mortu-Macaab',    faction: 'faction09', rarity: 'legendary', folder: 'mortu'          },
  { name: 'Praeva',          faction: 'faction09', rarity: 'legendary', folder: 'praeva'         },
  { name: 'Lord Shazaar',    faction: 'faction09', rarity: 'legendary', folder: 'shazar'         },
  { name: 'Sicia',           faction: 'faction09', rarity: 'legendary', folder: 'sicia'          },
  { name: 'Skorid',          faction: 'faction09', rarity: 'legendary', folder: 'skorid'         },
  { name: 'Tyran Ixlimor',   faction: 'faction09', rarity: 'legendary', folder: 'tyran'          },
  { name: 'Vasal',           faction: 'faction09', rarity: 'legendary', folder: 'vasal'          },
  { name: 'Vulkanos',        faction: 'faction09', rarity: 'legendary', folder: 'vulkanos'       },
  { name: 'Wythir',          faction: 'faction09', rarity: 'legendary', folder: 'wythir'         },
  { name: 'Karnage',         faction: 'faction09', rarity: 'mythical',  folder: 'karnage'        },
  { name: 'Komidus',         faction: 'faction09', rarity: 'mythical',  folder: 'komidus'        },
  { name: 'Kurosa',          faction: 'faction09', rarity: 'mythical',  folder: 'kurosa'         },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 10 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Morts-vivants ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Calamitus',       faction: 'faction10', rarity: 'mythical',  folder: 'calamitus'      },
  { name: 'Theodosia',       faction: 'faction10', rarity: 'mythical',  folder: 'theodosia'      },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 11 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Elfes Noirs ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Aphidus',         faction: 'faction11', rarity: 'mythical',  folder: 'aphidus'        },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 12 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Revenants Chevaliers ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Fortus',          faction: 'faction12', rarity: 'legendary', folder: 'fortus'         },
  { name: 'Embrys',          faction: 'faction12', rarity: 'mythical',  folder: 'embrys'         },
  { name: 'Krixia',          faction: 'faction12', rarity: 'mythical',  folder: 'krixia'         },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 13 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Nains ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Acrizia',            faction: 'faction13', rarity: 'legendary', folder: 'acrizia'        },
  { name: 'Arnorn',             faction: 'faction13', rarity: 'legendary', folder: 'arnorn'         },
  { name: 'Brogni',             faction: 'faction13', rarity: 'legendary', folder: 'brogni'         },
  { name: 'DÃÂÃÂÃÂÃÂ©fense Noire',      faction: 'faction13', rarity: 'legendary', folder: 'defense-noire'  },
  { name: 'Gnut',               faction: 'faction13', rarity: 'legendary', folder: 'gnut'           },
  { name: 'Roi de la Montagne', faction: 'faction13', rarity: 'legendary', folder: 'rdlm'           },
  { name: 'Senna',              faction: 'faction13', rarity: 'legendary', folder: 'senna'          },
  { name: 'Tholin',             faction: 'faction13', rarity: 'legendary', folder: 'tholin'         },
  { name: 'Trunda',             faction: 'faction13', rarity: 'legendary', folder: 'trunda'         },
  { name: 'Uzol',               faction: 'faction13', rarity: 'legendary', folder: 'uzol'           },
  { name: 'Fjorad',             faction: 'faction13', rarity: 'mythical',  folder: 'fjorad'         },
  { name: 'Frolni',             faction: 'faction13', rarity: 'mythical',  folder: 'frolni'         },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 14 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Clan de l'Ombre ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Arashi',       faction: 'faction14', rarity: 'legendary', folder: 'arashi'      },
  { name: 'Harima',       faction: 'faction14', rarity: 'legendary', folder: 'harima'      },
  { name: 'Ieyasu',       faction: 'faction14', rarity: 'legendary', folder: 'ieyasu'      },
  { name: 'Ishiyama',     faction: 'faction14', rarity: 'legendary', folder: 'ishiyama'    },
  { name: 'Jingwon',      faction: 'faction14', rarity: 'legendary', folder: 'jingwon'     },
  { name: 'Jintoro',      faction: 'faction14', rarity: 'legendary', folder: 'jintoro'     },
  { name: 'Dame Kimi',    faction: 'faction14', rarity: 'legendary', folder: 'kimi'        },
  { name: 'Leonardo',     faction: 'faction14', rarity: 'legendary', folder: 'leonardo'    },
  { name: 'Michinaki',    faction: 'faction14', rarity: 'legendary', folder: 'michinaki'   },
  { name: 'Ninja',        faction: 'faction14', rarity: 'legendary', folder: 'ninja'       },
  { name: 'Nobel',        faction: 'faction14', rarity: 'legendary', folder: 'nobel',	   },
  { name: 'Riho',         faction: 'faction14', rarity: 'legendary', folder: 'riho'        },
  { name: 'Shu-Zhen',     faction: 'faction14', rarity: 'legendary', folder: 'shu-zhen'    },
  { name: 'Tetsuya',      faction: 'faction14', rarity: 'legendary', folder: 'tetsuya'     },
  { name: 'Yoshi',        faction: 'faction14', rarity: 'legendary', folder: 'yoshi'       },
  { name: 'Zinogre',      faction: 'faction14', rarity: 'legendary', folder: 'zinogre'     },
  { name: 'Mikage',       faction: 'faction14', rarity: 'mythical',  folder: 'mikage'      },
  { name: 'Toshiro',      faction: 'faction14', rarity: 'mythical',  folder: 'toshiro'     },

  // ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Faction 15 ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ Gardes Sylvains ÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ
  { name: 'Ailil',            faction: 'faction15', rarity: 'legendary', folder: 'ailil'       },
  { name: 'Aratheia',         faction: 'faction15', rarity: 'legendary', folder: 'aratheia'    },
  { name: 'Balar',            faction: 'faction15', rarity: 'legendary', folder: 'balar'       },
  { name: 'Caldor',           faction: 'faction15', rarity: 'legendary', folder: 'caldor'      },
  { name: 'Caoilte',          faction: 'faction15', rarity: 'legendary', folder: 'caoilte'     },
  { name: 'Claidna',          faction: 'faction15', rarity: 'legendary', folder: 'claidna'     },
  { name: 'Elva',             faction: 'faction15', rarity: 'legendary', folder: 'elva'        },
  { name: 'Emic',             faction: 'faction15', rarity: 'legendary', folder: 'emic'        },
  { name: 'Eostrid',          faction: 'faction15', rarity: 'legendary', folder: 'eostrid'     },
  { name: 'Firrol',           faction: 'faction15', rarity: 'legendary', folder: 'firrol'      },
  { name: 'Roi Gallcobar',    faction: 'faction15', rarity: 'legendary', folder: 'gallcobar'   },
  { name: 'Glaicad',          faction: 'faction15', rarity: 'legendary', folder: 'glaicad'     },
  { name: "Dame d'Ireth",     faction: 'faction15', rarity: 'legendary', folder: 'ireth'       },
  { name: 'Leminisi',         faction: 'faction15', rarity: 'legendary', folder: 'leminisi'    },
  { name: 'Niamhe',           faction: 'faction15', rarity: 'legendary', folder: 'niamhe'      },
  { name: 'Oella',            faction: 'faction15', rarity: 'legendary', folder: 'oella'       },
  { name: 'Padraig',          faction: 'faction15', rarity: 'legendary', folder: 'padraig'     },
  { name: 'Ruarc',            faction: 'faction15', rarity: 'legendary', folder: 'ruarc'       },
  { name: 'Searsha',          faction: 'faction15', rarity: 'legendary', folder: 'searsha'     },
  { name: 'Yncensa',          faction: 'faction15', rarity: 'legendary', folder: 'yncensa'     },
  { name: 'Arbais',           faction: 'faction15', rarity: 'mythical',  folder: 'arbais'      },
  { name: 'Nais',             faction: 'faction15', rarity: 'mythical',  folder: 'nais'        },
  { name: 'Nell',             faction: 'faction15', rarity: 'mythical',  folder: 'nell'        },
    { name: 'Arne le Blanc', faction: 'faction04', rarity: 'mythical', folder: 'arne' },
    { name: 'Predator', faction: 'faction06', rarity: 'legendary', folder: 'predator' },
    { name: 'Heraut-orage Hekaton', faction: 'faction16', rarity: 'legendary', folder: 'hekaton' },
  ].map(c => ({
  ...c,
  url: `pages/factions/${c.faction}/${c.rarity}/${c.folder}/${c.folder}.html`,
  img: c.noImg ? null : `pages/factions/${c.faction}/${c.rarity}/${c.folder}/assets/${c.folder}.png`,
  factionName: FACTION_META[c.faction]?.name ?? c.faction,
  factionImg:  `assets/images/factions/${FACTION_META[c.faction]?.img ?? ''}`,
}));
