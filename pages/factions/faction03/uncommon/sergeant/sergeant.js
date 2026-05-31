const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Impact Écrasant",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff de ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maître du Fléau",
          description: `Attaque tous les ennemis. Offre 50 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 112",
        "DEF": "804",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
