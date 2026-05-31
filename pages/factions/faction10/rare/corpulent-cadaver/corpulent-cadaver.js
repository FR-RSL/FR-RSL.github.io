const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crushing Mass",
          description: `Attacks 1 enemy. Inflicts additional damage if this Champion is under a [Shield] buff. The additional damage is equal to 30% of the value of the [Shield] and cannot exceed 200,000.`,
          damage: "0.19*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Disgusting Display",
          description: `Places a [Shield] buff on this Champion equal to 20% of their MAX HP for 3 turns. Grants an Extra Turn.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Baleful Tenacity",
          description: `Attacks 1 enemy. Has an 80% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "617",
        "DEF": "1 035",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 15%`,
};
