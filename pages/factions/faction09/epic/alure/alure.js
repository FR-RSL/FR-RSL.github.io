const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Psychic Whip",
          description: `Attacks 3 times at random. Decreases the target's Turn Meter by 25% on each critical hit.`,
          damage: "1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Temptation",
          description: `Attacks all enemies 2 times. Each hit has a 30% chance of placing a 30% [Decrease DEF] debuff for 1 turn. Places a [Sleep] debuff for 1 turn on targets under [Decrease DEF] debuffs.`,
          damage: "1.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hellish Blaze",
          description: `Attacks 1 enemy. Has an extra 30% chance of inflicting a critical hit. Will ignore 50% of the target's DEF.`,
          damage: "4.6*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 575",
        "DEF": "793",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 50`,
};
