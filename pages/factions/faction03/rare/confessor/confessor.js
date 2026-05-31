const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stern Judgment",
          description: `Attacks 1 enemy. Has a 15% chance of decreasing the target's Turn Meter by 15%.`,
          damage: "3.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blinding Light",
          description: `Attacks all enemies. Has a 70% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unyielding Fervor",
          description: `Attacks 1 enemy. Has a 35% chance of granting an Extra Turn.`,
          damage: "5.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 409",
        "DEF": "815",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Dungeons by 16%`,
};
