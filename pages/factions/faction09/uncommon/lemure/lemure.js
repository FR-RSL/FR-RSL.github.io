const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappes Vicieuses",
          description: `Attaque 2 fois 1 ennemi.`,
          damage: "2.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sombre Rafale",
          description: `Attaque 1 ennemi. Possède 60 % de chances de placer un débuff de ${DEBUFFS.BOMB} qui détone après 3 tours.`,
          damage: "2.8*ATQ+0.2*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "639",
        "DEF": "903",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
