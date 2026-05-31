const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Filage",
          description: `Attaque 1 ennemi. Possède 15 % de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "3.4*ATQ+25",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 235",
        "ATQ": "595",
        "DEF": "859",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
