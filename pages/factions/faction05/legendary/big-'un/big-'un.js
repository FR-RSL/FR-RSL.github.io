const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Head Splitter",
          description: `Attacks 1 enemy. Attacks all enemies 1 time if the first attack is critical.`,
          damage: "2.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Forward Charge",
          description: `Attacks all enemies. Has a 30% chance of placing a [Stun] debuff for 1 turn. Also has a 50% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.6*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +15%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Molten Slag",
          description: `Attacks all enemies 2 times. Decreases the Turn Meter by 25%. Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.9*ATK",
          cooldown: 7,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 575",
        "DEF": "837",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Dungeons by 90`,
};
