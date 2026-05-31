const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sylvan Sword",
          description: `Attacks 1 enemy. Places a 25% [Increase ACC] buff on this Champion for 2 turns.`,
          damage: "2.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Take By Surprise",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "4.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mistwood Gale",
          description: `Attacks all enemies. Before attacking, places a 30% [Increase DEF] buff on all allies for 2 turns.`,
          damage: "3.1*DEF",
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "727",
        "DEF": "1 288",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
