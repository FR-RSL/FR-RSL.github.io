const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sequester",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hearten",
          description: `Increases the duration of buffs on all allies by 1 turn. Places a [Shield] buff equal to 25% of this Champion's HP on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.25*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Holy Storm",
          description: `Attacks all enemies. Has a 50% chance of removing all buffs.`,
          damage: "4.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 315",
        "ATQ": "1 079",
        "DEF": "804",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 31%`,
};
