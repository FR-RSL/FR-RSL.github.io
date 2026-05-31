const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Batter",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns if this attack is critical.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Precision Strike",
          description: `Attacks 1 enemy. This attack deals 50% extra C. DMG.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Killing Haze",
          description: `Attacks 1 enemy. Places an extra hit if this attack is critical. Fills the Turn Meters of all allies by 15% if this attack kills an enemy.`,
          damage: "5.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 531",
        "DEF": "870",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
