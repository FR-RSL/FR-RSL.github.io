const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lodestone Claw",
          description: `Attacks 1 enemy. Has a 50% chance of removing 1 random debuff from all allies.`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Protector Effigy",
          description: `Attacks all enemies. Places a [Shield] buff on all allies for 2 turns equal to 15% of this Champion’s MAX HP. Increases the duration of all buffs on all allies by 1 turn.<br><br><br>Shield Multiplier: 0.15*HP`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Shield +10%", "Level 4: Damage +10%", "Level 5: Shield +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lure of Fools",
          description: `Places a [Taunt] buff on this Champion for 1 turn. Also places a 25% [Strengthen] buff and a [Counterattack] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "826",
        "DEF": "1 156",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 20%`,
};
