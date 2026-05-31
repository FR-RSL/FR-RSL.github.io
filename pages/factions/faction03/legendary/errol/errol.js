const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blazing Sword",
          description: `Attacks 1 enemy. Has an extra 30% chance of inflicting a critical hit.`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Helmbreaker",
          description: `Attacks all enemies 2 times. Has an extra 30% chance of inflicting a critical hit. Each hit will ignore 15% of the target's DEF.`,
          damage: "1.85*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Damage +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Negation",
          description: `Attacks 1 enemy. Removes all debuffs from this Champion and steals all buffs from the target before attacking. Has an extra 30% chance of inflicting a critical hit. Grants an Extra Turn if the target is killed.`,
          damage: "5.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Damage +15%", "Level 4: Damage +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 674",
        "DEF": "837",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 28%`,
};
