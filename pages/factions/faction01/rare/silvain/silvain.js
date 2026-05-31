const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lover's Barb",
          description: `Attacks 1 enemy 3 times. Each critical hit will ignore 5% of the target's DEF.`,
          damage: "1.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rake's Flair",
          description: `Attacks all enemies.<br><br>Has a 75% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "3.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "I Fight For Love!",
          description: `Places a 25% [Increase ATK] and a 15% [Increase C. RATE] buff on this Champion for 2 turns.<br><br>Grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 321",
        "DEF": "716",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
