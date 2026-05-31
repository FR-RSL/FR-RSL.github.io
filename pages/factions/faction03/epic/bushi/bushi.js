const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rising Storm",
          description: `Attacks 1 enemy. Damage inflicted increases each time this skill is used. Stacks up to 4 times.`,
          damage: "ATK*(2.9+0.4*# of Skills Used)",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Deadly Edge",
          description: `Attacks 1 enemy. This attack is always critical. Places a 30% [Increase C. RATE] buff and a 15% [Increase SPD] buff on this Champion for 3 turns.`,
          damage: "7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unbending",
          description: `Revives this Champion with 30% HP. Places an [Unkillable] buff on this Champion for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 476",
        "DEF": "782",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 20%`,
};
