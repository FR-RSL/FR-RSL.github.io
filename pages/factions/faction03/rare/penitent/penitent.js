const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sword of Faith",
          description: `Attacks 1 enemy 2 times. Has a 30% chance of placing a 25% [Decrease ATK] debuff for 1 turn.`,
          damage: "4.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Counter",
          description: `Attacks 1 enemy. Places a [Counterattack] buff on this Champion for 1 turn.`,
          damage: "8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unshakable Faith",
          description: `Removes all debuffs from this Champion. Places a [Block Debuffs] buff on this Champion for 3 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "793",
        "DEF": "1 244",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
