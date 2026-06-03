const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Et que ça saute !",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe soigne ce Champion de 3 % de ses PV MAX.`,
          damage: "0.08*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fléau du bûcheron",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

Chaque frappe a 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 25 % pendant 2 tours.${RETURN}${RETURN}

Place également sur tous les alliés un buff ${BUFFS.SHIELD}, équivalent à 20 % des PV MAX de ce Champion, pendant 2 tours.`,
          damage: "0.13*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rugissement de racine",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 15 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un débuff ${DEBUFFS.PROVOKE} sur un ennemi pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "892",
        "DEF": "980",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Donjons de 15%`,
};
