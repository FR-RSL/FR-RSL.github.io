const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tarry Fist",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "3.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frust",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of placing a [Provoke] debuff for 1 turn. Has a 40% chance of placing a [Provoke] debuff on all enemies for 1 turn if the first [Provoke] debuff is placed.`,
          damage: "2.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ichor Fling",
          description: `Attacks all enemies. Has an 80% chance of removing 1 random buff from each target.`,
          damage: "3.9*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +20%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "793",
        "DEF": "1 421",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
