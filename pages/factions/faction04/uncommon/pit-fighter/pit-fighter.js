const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "True Strike",
          description: `Attacks 1 enemy. Has an extra 25% chance of placing a critical hit.`,
          damage: "2.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gust of Dust",
          description: `Attacks 1 enemy. Decreases the target's Turn Meter by 50%.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "892",
        "DEF": "782",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
