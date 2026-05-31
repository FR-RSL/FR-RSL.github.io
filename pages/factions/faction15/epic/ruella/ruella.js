const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Harassment Volley",
          description: `Attacks 1 enemy 3 times. Each critical hit has an 80% chance of stealing 5% of the target’s Turn Meter.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "No Respite",
          description: `Attacks 1 enemy 3 times. Each hit has a 50% chance of placing a 60% [Decrease DEF] debuff, a 25% [Weaken] debuff and a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "2.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Timed Offensive",
          description: `Fills the Turn Meters of all allies by 20% and places a 30% [Increase C. RATE] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 376",
        "DEF": "870",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Dungeons by 40`,
};
