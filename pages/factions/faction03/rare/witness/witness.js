const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir Lointain",
          description: `Attaque un ennemi. Possède 15% de chances de porter un coup supplémentaire.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Feu d'Assistance",
          description: `Attaque un ennemi. Place, pendant 3 tours, un buff d'${BUFFS.DEF} de 30% sur l'allié ayant le moins de PV.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prière de Réconfort",
          description: `Place un buff de ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 1 tour. Place, sur tous les alliés, un buff de ${BUFFS.SHIELD} équivalent à 30% des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 134",
        "DEF": "903",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des Cryptes de Faction de 30`,
};
