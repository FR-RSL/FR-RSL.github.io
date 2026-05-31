const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Battering Ram",
          description: `Attacks 1 enemy. Decreases the target's Turn Meter by 15% if the target is under a [Decrease DEF] debuff or [Decrease SPD] debuff.`,
          damage: "3.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Thrashing Fit",
          description: `Places a 50% [Increase ATK] buff on this Champion for 2 turns, then attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Siege Breaker",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns, then attacks 1 enemy. Has a 75% chance of placing a 30% [Decrease SPD] debuff on the target for 2 turns.`,
          damage: "5.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 542",
        "DEF": "760",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Doom Tower by 24%`,
};
