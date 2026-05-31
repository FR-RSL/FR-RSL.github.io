const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Keen Shot",
          description: `Attacks 1 enemy. Places an extra hit if this attack is critical.`,
          damage: "2.2*ATK + 100",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lightning Arrow",
          description: `Attacks 1 enemy, then all enemies. Has an extra 15% chance of inflicting a critical hit. Places a 30% [Increase C. RATE] buff on this Champion for 3 turns if a target is killed.`,
          damage: "2.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Valley of Death",
          description: `Attacks all enemies 2 times.`,
          damage: "2.2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 233",
        "DEF": "837",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `
Increases Ally HP in all Battles by 15%`,
};
