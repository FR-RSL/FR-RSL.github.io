const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Agonize",
          description: `Attacks 1 enemy 2 times. If this attack is critical, has an 85% chance of placing a 50% [Decrease ATK] debuff on all enemies for 2 turns.`,
          damage: "1.2*DEF+ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flesh Warp",
          description: `Attacks all enemies. Has a 35% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.3*DEF+ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Appropriate",
          description: `Attacks 1 enemy. Removes all buffs from the target and places them on this Champion.`,
          damage: "6*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "826",
        "DEF": "1 299",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
