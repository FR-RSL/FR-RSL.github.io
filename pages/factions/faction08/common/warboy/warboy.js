const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Saccage",
          description: `Attaque un ennemi. Possède 15% de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "584",
        "DEF": "738",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
