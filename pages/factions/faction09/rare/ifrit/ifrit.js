const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feebleness Curse",
          description: `Attacks 1 enemy. Places a 15% [Weaken] debuff for 1 turn.`,
          damage: "5.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Withering Bolt",
          description: `Attacks 1 enemy. Places a 25% [Decrease ATK] debuff for 2 turns. Damage increases according to this Champion's MAX HP.`,
          damage: "2.5*ATK+0.2*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Shadow Field [P]",
          description: `Decreases the damage received by 50% if damage from a single hit exceeds 30% HP. Places a 30% [Decrease DEF] debuff for 2 turns on the attacker if the attack is critical.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "815",
        "DEF": "958",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 15%`,
};
