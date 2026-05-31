const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mystic Chill",
          description: `Attacks 1 enemy 3 times. Has a 25% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vigor Theft",
          description: `Attacks 1 enemy 2 times. Each hit has a 75% chance of stealing 1 buff from the target.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chant of Violence",
          description: `Fills the Turn Meter of all allies by 25%. Places a 30% [Increase C. RATE] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "793",
        "DEF": "1 178",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
