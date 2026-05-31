const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Repel Intruders",
          description: `Attacks 1 enemy. Has a 15% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.26*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hallowed Ground",
          description: `Attacks all enemies, then places a 30% [Increase DEF] buff on all allies for 2 turns.`,
          damage: "3.4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "False Bravado",
          description: `Attacks 1 enemy. Has a 70% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "6.3*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "804",
        "DEF": "1 200",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
