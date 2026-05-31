const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sure Strike",
          description: `Attacks 1 enemy. Has a 20% chance of placing a 50% [Decrease ACC] debuff on the target for 1 turn.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fortify",
          description: `Places a [Block Debuffs] buff and a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Helmcleaver",
          description: `Attacks 1 enemy. Will ignore DEF if the target has less than 50% HP. Damage increases according to this Champion's MAX HP.`,
          damage: "3.9*ATK+0.1*HP",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "991",
        "DEF": "815",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Arena by 25%`,
};
