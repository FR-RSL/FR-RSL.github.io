const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "King's End",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 5% [Poison] debuff for 1 turn.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lingering Death",
          description: `Attacks 1 enemy. Has a 50% chance of increasing the duration of all debuffs on the enemy by 1 turn.`,
          damage: "5.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Draught of Sleep",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "5.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 365",
        "DEF": "771",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 10%`,
};
