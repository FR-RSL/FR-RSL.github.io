const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mutilate",
          description: `Attacks 1 enemy 2 times. Has a 15% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ancient Seal",
          description: `Attacks 1 enemy. Has an 80% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "7*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Death's Vigor",
          description: `Attacks all enemies. Places a 15% [Increase C. RATE] buff on all allies for 2 turns.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 090",
        "DEF": "980",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
