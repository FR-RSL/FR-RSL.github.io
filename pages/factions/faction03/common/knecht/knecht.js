const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stab",
          description: `Attacks 1 enemy. Has an extra 20% chance of inflicting a critical hit. Damage inflicted is proportional to DEF.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "650",
        "DEF": "738",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
