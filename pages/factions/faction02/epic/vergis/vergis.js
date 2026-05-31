const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pierce",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 30% [Reflect Damage] buff on a random ally for 2 turns.`,
          damage: "3.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Aegis",
          description: `Places a 15% [Continuous Heal] buff, a 30% [Increase SPD] buff, and a 30% [Reflect Damage] buff on a target ally for 3 turns. <br><br>Also places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Places a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Second Wind [P]",
          description: `[Passive Effect] <br><br>Places a [Shield] buff on this Champion equal to 10% of their MAX HP for 2 turns whenever this Champion loses 10% or more of their MAX HP from a single hit.<br><br>[Active Effect]<br><br>Places a 15% [Continuous Heal] buff on this Champion for 2 turns every time their HP drops below 50%.<br><br><br>Shield Multiplier: 0.1*HP`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "925",
        "DEF": "1 310",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 33%`,
};
