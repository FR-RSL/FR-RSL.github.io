const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Axe Throw",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 30% [Decrease DEF] debuff for 1 turn.`,
          damage: "ATK*3",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Meteor",
          description: `Attacks all enemies.`,
          damage: "ATK*3",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Burn",
          description: `Attacks 1 enemy. This skill always inflicts a critical hit.`,
          damage: "ATK*5.2",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 266",
        "DEF": "892",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Faction Wars by 30`,
};
