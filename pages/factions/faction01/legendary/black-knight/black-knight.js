const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Violent",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "0.28*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Visière Basse",
          description: `Place un buff ${BUFFS.HEALS} de 15 % et un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dernier Souffle",
          description: `Attaque tous les ennemis. Les dégâts augmentent en fonction de la quantité de PV que ce Champion a perdus.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Valeureux [P]",
          description: `Place un buff ${BUFFS.UNKILLABLE} d'1 tour sur ce Champion si les dégâts reçus dépassent 15 % des PV MAX en une seule attaque.`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "914",
        "DEF": "1 167",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = null;
