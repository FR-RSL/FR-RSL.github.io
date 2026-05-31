const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Disdainful Swipe",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "DEF*5",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crush the Weak",
          description: `Attacks all enemies. Has a 35% chance of placing a 15% [Weaken] debuff for 2 turns. Deals extra damage to enemies with the [Weaken] debuff.`,
          damage: "DEF*4.6Multiplier: 3*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Freeze Solid",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "DEF*6.5",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1", "Level 7: Damage +10%", "Level 8: Buff/Debuff Chance +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "870",
        "DEF": "1 013",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 15%`,
};
