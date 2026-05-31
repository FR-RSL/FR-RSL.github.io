const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Purgatory",
          description: `Attacks 1 enemy. Has a 30% chance of decreasing the target’s Turn Meter by 10%. Has a 60% instead if the target is under a [HP Burn] debuff.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Time's Undoing",
          description: `Has a 75% chance of decreasing the Turn Meters of all enemies by 15%.<br><br>Fills the Turn Meters of all allies by 15%.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Heavenly Flames",
          description: `Has a 75% chance of placing a [HP Burn] debuff on all enemies for 2 turns. <br><br>Places a 50% [Increase ATK] buff on all allies for 3 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 244",
        "DEF": "1 156",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
