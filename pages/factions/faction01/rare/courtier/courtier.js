const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Outmaneuver",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Denigrate",
          description: `Attacks 1 enemy 3 times. Each hit has a 30% chance of removing 1 random buff from the target.`,
          damage: "1.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Whirling Blow",
          description: `Attacks all enemies 2 times. Has a 33% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 277",
        "DEF": "903",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
