const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Carve Up",
          description: `Attacks 1 enemy.`,
          damage: "5.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Weakling!",
          description: `Attacks 1 enemy. Has a 50% chance of decreasing the Turn Meter by 20%.`,
          damage: "7.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "980",
        "DEF": "804",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
