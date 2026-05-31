const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Maim",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 15% [Decrease SPD] debuff for 1 turn.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cold Grasp",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 30% [Decrease DEF] debuff for 2 turns. Places a [Freeze] debuff for 1 turn if the target is currently under a [Decrease SPD] debuff.`,
          damage: "5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 178",
        "DEF": "716",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
