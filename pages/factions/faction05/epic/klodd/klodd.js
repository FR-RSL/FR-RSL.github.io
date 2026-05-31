const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "New Stabby Hand",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 30% [Decrease C. RATE] debuff for 2 turns.`,
          damage: "0.24*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Get Behind Me",
          description: `Places a [Shield] buff on all allies equal to 20% of this Champion’s MAX HP for 2 turns.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +10%", "Level 4: Shield +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Beast Escape",
          description: `Places a 30% [Increase SPD] buff and a 50% [Increase ACC] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Delicious Giblets [P]",
          description: `Heals the ally with the lowest HP by 10% of their MAX HP at the start of this Champion’s turn.<br><br>Heal Multiplier: 0.1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "815",
        "DEF": "1 046",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
