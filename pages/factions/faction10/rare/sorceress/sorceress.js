const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crystal Bolt",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Magic Arrows",
          description: `Attacks 1 enemy 2 times. Has a 20% chance of placing an extra hit.`,
          damage: "2.5*ATKMultiplier: 2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vine Trap",
          description: `Attacks 3 times at random. Each hit has a 30% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 321",
        "DEF": "870",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
