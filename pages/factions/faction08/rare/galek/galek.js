const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cross Slash",
          description: `Attacks 1 enemy 2 times.`,
          damage: "1.5*ATK + 50",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hellraiser",
          description: `Attacks all enemies. Has an extra 15% chance of inflicting a critical hit. Places a 30% [Increase SPD] buff on this Champion for 2 turns.`,
          damage: "4.5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cursed Blade",
          description: `Attacks 4 times at random. Has a 30% chance of placing a 30% [Decrease DEF] debuff for 2 turns. Has a 30% chance of placing a 60% [Decrease DEF] debuff for 2 turns if the target has more than 2 debuffs.`,
          damage: "1.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 200",
        "DEF": "914",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 15%`,
};
