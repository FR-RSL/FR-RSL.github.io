const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dual Scalpel",
          description: `Attacks 1 enemy 2 times.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Restraints",
          description: `Attacks all enemies. Has a 50% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "3.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Stimulant Elixir",
          description: `Places a 30% [Increase DEF] buff on all allies for 2 turns. Also places a 15% [Increase SPD] buff on this Champion for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 046",
        "DEF": "881",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
