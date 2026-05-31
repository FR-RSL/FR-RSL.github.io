const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Render Helpless",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns if this attack kills an enemy.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Utter Rampage",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "4.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Deaden Reactions",
          description: `Attacks 1 enemy. Before attacking, has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "6.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 343",
        "DEF": "1 024",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
