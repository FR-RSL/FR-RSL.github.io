const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Daggers",
          description: `Attacks 1 enemy 2 times. Each critical hit decreases the target’s Turn Meter by 4%.`,
          damage: "1.65*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Precision Sabotage",
          description: `Attacks all enemies. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.65*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Swordbreak Knife",
          description: `4 Turns<br>Decrease Attack<br>Attacks 1 enemy. Has a 50% chance of placing a 25% [Decrease ATK] debuff for 2 turns. Has a 50% chance of placing a 50% [Decrease ATK] debuff instead if the target is under a [Decrease DEF] debuff.`,
          damage: "5.8*ATK",
          levelInfo: ["Level 1: Damage +5%", "Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 387",
        "DEF": "793",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 20%`,
};
