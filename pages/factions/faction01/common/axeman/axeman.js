const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Heavy Chop",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 25% [Decrease ACC] debuff for 1 turn. Damage inflicted is proportional to DEF.`,
          damage: "4.2*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "507",
        "DEF": "694",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
