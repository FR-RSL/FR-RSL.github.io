const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ravaging Paw",
          description: `Attacks 1 enemy. Has a 10% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Howling Gale",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease C. RATE] debuff for 2 turns.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Shroud of Winter [P]",
          description: `Decreases the damage all allies receive from critical hits by 15%. Fills this Champion’s Turn Meter by 5% whenever an enemy lands a normal, strong, or weak hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "738",
        "DEF": "1 409",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
