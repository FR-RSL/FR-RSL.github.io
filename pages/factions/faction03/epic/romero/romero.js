const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bring Hope",
          description: `Attacks 1 enemy. Places a 7.5% [Continuous Heal] buff on the ally with the lowest HP for 1 turn.`,
          damage: "3.7*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Succor",
          description: `Places a 15% [Continuous Heal] buff on all allies for 2 turns. Steals 1 buff from each enemy.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Divine Benefaction",
          description: `Places a [Shield] buff on all allies equal to 25% of their MAX HP for 2 turns. Places a 60% [Increase DEF] buff on this Champion for 2 turns.<br><br><br>Shield Multiplier: 0.25*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Shield +25%", "Level 3: Shield +25%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Stalwart Partner",
          description: `Attacks all enemies 3 times. <br><br>[Only available when Juliana is on the same team.]`,
          damage: "1.4*DEF",
          cooldown: 3,
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "804",
        "DEF": "1 299",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
