const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Angry Mallet",
          description: `Attacks 1 enemy.<br>Places a [Shield] buff on this Champion equal to 10% of their MAX HP for 2 turns.<br><br><br>Shield Multiplier: 0.1*HP`,
          damage: "0.1*HP+0.1*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Shield +5%", "Level 6: Shield +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "No Coming Back",
          description: `Attacks 1 enemy.<br>Places a 50% [Heal Reduction] debuff for 2 turns.`,
          damage: "0.2*HP+1.5*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shoulder the Weight",
          description: `Places a 25% [Ally Protection] buff on all allies for 2 turns.<br>Places a 30% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "804",
        "DEF": "925",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "55",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 25%`,
};
