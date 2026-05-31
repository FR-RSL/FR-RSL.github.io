const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Twisted Spike",
          description: `Attacks 1 enemy. Places a [Shield] buff on this Champion for 1 turn equal to 10% of their MAX HP.<br><br><br>Shield Multiplier: HP*0.1`,
          damage: "3.1*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Swordbreak Cage",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bound to Serve",
          description: `Places a 25% [Ally Protection] buff on all allies except this Champion for 2 turns. Also places a 15% [Continuous Heal] buff on this Champion for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "793",
        "DEF": "1 255",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
