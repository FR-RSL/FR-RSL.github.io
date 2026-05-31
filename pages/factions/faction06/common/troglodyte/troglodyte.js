const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Acid Blade",
          description: `Attacks 1 enemy 2 times. Has a 20% chance of placing a 25% [Decrease ATK] debuff for 1 turn. Damage inflicted is proportional to DEF.`,
          damage: "1.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "9 750",
        "ATQ": "760",
        "DEF": "793",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
