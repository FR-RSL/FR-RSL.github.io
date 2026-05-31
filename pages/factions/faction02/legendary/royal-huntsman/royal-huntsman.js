const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Confident Shot",
          description: `Attacks 1 enemy. Places a 50% [Increase ATK] buff on this Champion for 2 turns if this attack is critical.`,
          damage: "3.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Slaughter Volley",
          description: `Attacks all enemies. Places a 60% [Decrease DEF] debuff on the target for 2 turns if this attack is critical.`,
          damage: "3.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dead Aim",
          description: `Attacks 1 enemy. Will ignore DEF by 100%.`,
          damage: "5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 553",
        "DEF": "936",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Spirit Ally ATK in all Battles by 38%`,
};
