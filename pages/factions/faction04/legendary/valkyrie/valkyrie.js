const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Denigration",
          description: `Attacks 1 enemy 2 times. Decreases Turn Meter by 10% on each hit if the target has any buffs.`,
          damage: "1.7*ATK+0.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stand Firm",
          description: `Attacks all enemies. Places a [Shield] buff on all allies for 3 turns and a [Counterattack] buff on all allies for 2 turns. The value of the [Shield] and the damage inflicted are proportional to this Champion's DEF.<br><br><br>Shield Multiplier: 4*DEF`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Shield +10%", "Level 4: Damage +5%", "Level 5: Shield +10%", "Level 6: Damage +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Jealousy [P]",
          description: `This Champion's Turn Meter will be increased by 10% each time an enemy Champion places a buff. Enemy Champions will have their Turn Meters decreased by 10% for each buff they receive.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "793",
        "DEF": "1 597",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 33%`,
};
