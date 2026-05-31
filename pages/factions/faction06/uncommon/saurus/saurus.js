const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wind Cutter",
          description: `Attacks all enemies.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fire Wave",
          description: `Attacks all enemies 2 times. Has a 10% chance of placing a 50% [Heal Reduction] debuff for 1 turn. Places a 50% [Heal Reduction] debuff if the target's current HP is less than or equal to 40%.`,
          damage: "1.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 244",
        "DEF": "661",
        "VIT": "83",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
