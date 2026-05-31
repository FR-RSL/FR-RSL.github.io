const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Jeté de Hache",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 1 tour.`,
          damage: "ATQ*3",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Météore",
          description: `Attaque tous les ennemis.`,
          damage: "ATQ*3",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brûlure",
          description: `Attaque un ennemi. Cette Compétence inflige toujours un coup critique.`,
          damage: "ATQ*5.2",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 266",
        "DEF": "892",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des Cryptes de Faction de 30`,
};
