const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shank",
          description: `Attacks 1 enemy.`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Throwing Knives",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of placing a 2.5% [Poison] debuff for 2 turns.`,
          damage: "3.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 123",
        "DEF": "705",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
