const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Peasant's Bow",
          description: `Attacks 1 enemy 2 times.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fusillade",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "6.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 565",
        "ATQ": "1 156",
        "DEF": "826",
        "VIT": "86",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
