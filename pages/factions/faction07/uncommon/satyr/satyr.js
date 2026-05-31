const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Deep Cut",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Catch!",
          description: `Attacks 4 times at random. Decreases the Turn Meter by 15% if this attack is critical.`,
          damage: "1.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1", "Level 6: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "892",
        "DEF": "848",
        "VIT": "83",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
