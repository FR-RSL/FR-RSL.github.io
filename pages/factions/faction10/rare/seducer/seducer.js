const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lulling Touch",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Sleep] debuff for 1 turn.`,
          damage: "2.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Disorienting Blast",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.6*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Twisted Devotion",
          description: `Places a 30% [Increase DEF] buff on all allies for 2 turns and a [Block Debuffs] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Selfless Partner",
          description: `Places a 50% [Ally Protection] buff on all allies for 2 turns. Places a [Block Damage] buff on this Champion for 1 turn. <br><br>[Only available when Temptress is on the same team.]`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "628",
        "DEF": "1 321",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
