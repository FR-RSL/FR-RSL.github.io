const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Twin Chops",
          description: `Attacks 1 enemy 2 times.`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Superior Steel",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.15*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rune of Outlasting",
          description: `Places a 15% [Reflect Damage] buff and a 7.5% [Continuous Heal] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "848",
        "DEF": "903",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "55",
        "PRÉ": "0"
      },
};

const aura = null;
