const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Scrabbling Claws",
          description: `Attacks 1 enemy 2 times. Has a 25% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "1.1*ATK+0.05*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Warning Screech",
          description: `Fills the Turn Meter of all allies by 30%. Places a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shelter",
          description: `Attacks all enemies. Places a [Shield] buff equal to 30% MAX HP on this Champion for 2 turns. Damage increases according to this Champion's current HP.<br><br><br>Shield Multiplier: 0.3* HP`,
          damage: "0.1*HP",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "925",
        "DEF": "749",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 21%`,
};
