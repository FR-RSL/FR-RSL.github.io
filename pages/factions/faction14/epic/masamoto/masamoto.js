const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dual Slice",
          description: `Attacks 1 enemy 2 times. Has a 10% chance of stealing 1 random buff.`,
          damage: "1.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Steel Typhoon",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "4.1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Yojimbo",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns. Also fills the Turn Meters of all allies by 15%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "870",
        "DEF": "1 365",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
