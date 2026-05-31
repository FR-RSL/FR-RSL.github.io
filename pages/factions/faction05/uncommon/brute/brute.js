const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dirty Cuts",
          description: `Attacks 2 times at random. Has a 50% chance of placing a 5% [Poison] debuff for 1 turn if this attack is critical.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rip and Tear",
          description: `Attacks 1 enemy. Has an extra 30% chance of inflicting a critical hit.`,
          damage: "6*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 079",
        "DEF": "705",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
