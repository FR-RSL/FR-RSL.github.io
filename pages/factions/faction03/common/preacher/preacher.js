const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Sacré",
          description: `Attaque 1 ennemi. Possède 25 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 1 tour.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 080",
        "ATQ": "837",
        "DEF": "694",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
