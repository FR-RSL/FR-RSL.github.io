const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exhausting Assault",
          description: `Attacks 1 enemy 2 times. Has a 15% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "5.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Recuperate",
          description: `Places a 7.5% [Continuous Heal] buff and a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is proportional to this Champion's MAX HP.<br><br><br>Shield Multiplier: 0.1*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ice Blow",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "6.7*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "771",
        "DEF": "1 167",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 17%`,
};
