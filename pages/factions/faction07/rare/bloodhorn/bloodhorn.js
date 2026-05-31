const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Killer Crescent",
          description: `Attacks 1 enemy. Has a 15% chance of placing a 25% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Intervene",
          description: `Places a 50% [Ally Protection] buff on 2 random allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Deep Defense [P]",
          description: `If an ally is hit with a critical hit, places a 15% [Continuous Heal] buff on them for 1 turn.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "870",
        "DEF": "991",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 21%`,
};
