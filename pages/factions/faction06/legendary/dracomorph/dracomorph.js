const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Seeping Pain",
          description: `Attacks 1 enemy. Damage increases by 10% for each debuff on the target. Will attack 1 random enemy with any surplus damage if the target is killed. Damage inflicted is equal to triple the surplus damage. The surplus damage cannot be critical.`,
          damage: "3.5*ATKMultiplier: Remaining Damage Amount*3",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poison Jaws",
          description: `Attacks 4 times at random. Each hit places a 5% [Poison] debuff for 3 turns.`,
          damage: "1.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Baleful Eye",
          description: `Places a 25% [Weaken] debuff and a 60% [Decrease DEF] debuff on all enemies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 520",
        "DEF": "1 046",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 50`,
};
