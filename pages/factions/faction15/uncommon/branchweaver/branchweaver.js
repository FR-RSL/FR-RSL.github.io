const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Branch of Alacrity",
          description: `Attacks 1 enemy. Places a 15% [Increase SPD] buff on the ally with the highest Turn Meter, except this Champion, for 1 turn.`,
          damage: "4.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Daggerleaf",
          description: `Attacks all enemies. Has a 25% chance of placing a 15% [Decrease SPD] debuff on all enemies for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 565",
        "ATQ": "1 189",
        "DEF": "793",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
