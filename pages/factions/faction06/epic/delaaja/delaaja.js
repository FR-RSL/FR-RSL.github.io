const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bain d'Azoth",
          description: `Attaque 2 fois un ennemi. Chaque frappe soigne cette Championne de 2 % de ses PV MAX. 

Chaque frappe possède également 20 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "0.12*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lames dissoutes",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mousse vivifiante",
          description: `Place un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 1 tour.

Place également sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de cette Championne pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Instincts [P]",
          description: `Possède 30 % de chances de contre-attaquer lorsque des Hommes Lézards alliés, sauf cette Championne, sont attaqués.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "760",
        "DEF": "1 167",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 30%`,
};
