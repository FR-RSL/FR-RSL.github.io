const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rebuke",
          description: `Attacks 1 enemy. Has a 50% chance of removing 1 random buff from the target.`,
          damage: "5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sanction",
          description: `Attacks 1 enemy. Places a [Block Active Skills] debuff and a [Block Buffs] debuff for 2 turns. These debuffs cannot be resisted.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Zone of Protection",
          description: `Places a [Block Damage] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "24 780",
        "ATQ": "947",
        "DEF": "980",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
