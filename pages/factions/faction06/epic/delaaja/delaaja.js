const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bath of Azoth",
          description: `Attacks 1 enemy 2 times. Each hit heals this Champion by 2% of their MAX HP. <br><br>Each hit also has a 20% chance of placing a 5% [Poison] debuff for 2 turns.<br><br><br>Heal Multiplier: 0.02*HP`,
          damage: "0.12*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blades Dissolved",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Restorative Froth",
          description: `Places a 15% [Continuous Heal] buff on all allies for 1 turn.<br><br>Also places a [Shield] buff equal to 20% of this Champion's MAX HP on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Instincts [P]",
          description: `Has a 30% chance of counterattacking when ally Lizardmen except this Champion are attacked.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "760",
        "DEF": "1 167",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 30%`,
};
