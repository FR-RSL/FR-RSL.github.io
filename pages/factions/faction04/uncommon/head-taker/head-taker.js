const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tailler en Pièces",
          description: `Attaque un ennemi.`,
          damage: "5.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mauviette !",
          description: `Attaque un ennemi. Possède 50 % de chances de réduire de 20 % le Compteur de Tour.`,
          damage: "7.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "980",
        "DEF": "804",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
