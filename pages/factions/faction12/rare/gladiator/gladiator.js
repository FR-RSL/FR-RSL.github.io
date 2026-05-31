const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cleaving Axe",
          description: `Attacks 1 enemy 2 times. Has a 30% chance of placing a 50% [Decrease ATK] debuff for 2 turns if the target's Turn Meter is more than or exactly 50% full.<br><br>Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns if the target's Turn Meter is less than 50% full.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Capital Punishment",
          description: `Attacks 2 times at random. Has an 80% chance of placing a [Stun] debuff if the target's Turn Meter is above or equal 75%.`,
          damage: "3.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Torture",
          description: `Attacks all enemies.`,
          damage: "3.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 156",
        "DEF": "936",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
