const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sacred Flame",
          description: `Attacks 1 enemy. Has a 10% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "0.14*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crystal Burst",
          description: `Attacks all enemies. Places a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.1*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Diehard [P]",
          description: `Decreases the damage taken by this Champion by 30% when their HP drops below 30%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "837",
        "DEF": "881",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 22%`,
};
