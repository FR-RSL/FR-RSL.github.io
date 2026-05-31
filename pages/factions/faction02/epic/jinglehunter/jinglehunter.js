const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Missile Toe",
          description: `Attacks 1 enemy 2 times. Has a 40% chance of placing a 30% [Decrease SPD] debuff for 2 turns if this attack is critical.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Jacked Frost",
          description: `Attacks 1 enemy. Has a 90% chance of placing a [Freeze] debuff on all enemies for 1 turn if this attack kills the enemy.`,
          damage: "5.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cold Snap",
          description: `Attacks all enemies. Decreases the Turn Meter by 20% if this attack is critical. Fills this Champion's Turn Meter by 10% if this attack is critical.`,
          damage: "3.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 498",
        "DEF": "826",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 24%`,
};
