const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Power Drain",
          description: `Attacks 1 enemy. Has a 50% chance of decreasing the target's Turn Meter by 10%. Damage inflicted is proportional to DEF.`,
          damage: "3.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Damage Control",
          description: `Places an [Unkillable] buff and a 25% [Increase ATK] buff on a target ally for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Life Shackles",
          description: `Attacks 3 times at random. Each hit has a 30% chance of placing a 100% [Heal Reduction] debuff and a 50% [Decrease ATK] debuff for 2 turns. Damage inflicted is proportional to DEF.`,
          damage: "2.6*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "958",
        "DEF": "1 112",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
