const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Confounding Crush",
          description: `Attacks 1 enemy. Has a 35% chance of increasing the cooldown of one of the target's Skills by 1 turn at random.`,
          damage: "4.2*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Beat Back",
          description: `Attacks 1 enemy 2 times. Each hit has a 75% chance of decreasing the Turn Meter by 5%. Decreases the Turn Meter by 10% instead if the target is under a [Decrease ATK] debuff.`,
          damage: "3.2*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rampaging Swipe",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.9*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ursine Brutality [P]",
          description: `Each hit has a 50% chance of decreasing the target's Turn Meter by 7.5%. Each hit also has a 50% chance of putting one of the target's Skills on cooldown if the target is under a [Decrease C. RATE] debuff.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +20%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "793",
        "DEF": "1 222",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
