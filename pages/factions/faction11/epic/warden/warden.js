const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Deathmark",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 15% [Weaken] debuff for 1 turn. Damage inflicted is proportional to DEF.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +20%", "Level 7: Damage +10%", "Level 8: Buff/Debuff Chance +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rending Flames",
          description: `Attacks all enemies. Has a 50% chance of placing a 25% [Decrease ATK] debuff for 2 turns. Places a 30% [Increase DEF] buff on all allies for 2 turns. Damage inflicted is proportional to DEF.`,
          damage: "3.7*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wall of Thorns",
          description: `Attacks all enemies 1 time. Places a 30% [Reflect Damage] buff on all allies for 2 turns.`,
          damage: "2*ATK+2.1*DEF",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "870",
        "DEF": "1 277",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Arena by 30%`,
};
