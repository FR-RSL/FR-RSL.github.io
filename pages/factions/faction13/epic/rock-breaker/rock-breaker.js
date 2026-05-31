const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Whirling Hammers",
          description: `Attacks 1 enemy. <br>Increases this Champion's DEF by 4% each time this Skill is used. Stacks up to 20%.`,
          damage: "2.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chest Thump",
          description: `Has a 75% chance of placing a [Provoke] debuff on all enemies for 1 turn.<br>Places a [Counterattack] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Iron Hide [P]",
          description: `Has a 25% chance of decreasing damage inflicted on this Champion by 50% each time this Champion is attacked.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "716",
        "DEF": "1 354",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "75",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Arena by 30%`,
};
