const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Shot",
          description: `Attacks 1 enemy 2 times. Has an extra 15% chance of inflicting a critical hit. Fills this Champion's Turn Meter by 15% if this attack is critical.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rain of Arrows",
          description: `Attacks all enemies 2 times. Has a 10% chance to place a 15% [Decrease SPD] debuff for 1 turn.`,
          damage: "1.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Cooldown -1", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Damage +15%", "Level 8: Buff/Debuff Chance +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 156",
        "DEF": "727",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
