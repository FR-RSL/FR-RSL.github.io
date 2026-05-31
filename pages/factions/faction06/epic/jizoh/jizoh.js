const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Reaping Blows",
          description: `Attacks 1 enemy 2 times.`,
          damage: "1.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fierce Protector",
          description: `Places a [Shield] buff for 3 turns and a [Counterattack] buff for 2 turns on one ally. Grants an extra turn. The value of the [Shield] is proportional to this Champion's DEF.<br><br><br>Shield Multiplier: 2*DEF`,
          cooldown: 5,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rile",
          description: `Attacks 1 enemy. Has an 80% chance of placing a [Provoke] debuff for 2 turns. Places a 15% [Continuous Heal] buff on this Champion for 2 turns.`,
          damage: "5.8*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "815",
        "DEF": "1 387",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 18%`,
};
