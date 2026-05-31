const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Transference",
          description: `Attacks 1 enemy. Transfers all debuffs from this Champion to the target.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exhaustion",
          description: `Attacks 1 enemy. Fully depletes the target's Turn Meter.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Energize",
          description: `Places a 30% [Increase SPD] buff on all allies for 2 turns. Fills the Turn Meter of all allies by 30%. Decreases the Turn Meter of all enemies by 30%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "969",
        "DEF": "1 178",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all Battles by 24%`,
};
