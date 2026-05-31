const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Iron Greatclub",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "3.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Daunting Violence",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% [Weaken] debuff for 2 turns. Also has a 25% chance of placing a [Fear] debuff for 1 turn.`,
          damage: "4.1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wall of Metal",
          description: `Places a 30% [Reflect Damage] buff on all allies for 2 turns. Also places a [Counterattack] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "793",
        "DEF": "1 332",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
