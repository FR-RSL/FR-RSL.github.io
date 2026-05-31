const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mace of Contempt",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sweeping Retribution",
          description: `Attacks all enemies. Has an 80% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Time Compression",
          description: `Fills the Turn Meters of all allies by 15% and decreases the Turn Meters of all enemies by 15%. Grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "947",
        "DEF": "1 167",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
