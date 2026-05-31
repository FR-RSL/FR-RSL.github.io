const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Horror",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Block Active Skills] debuff for 1 turn. Has a 35% chance of placing a [True Fear] debuff for 1 turn on targets under [Block Active Skills] debuffs.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shadow Strike",
          description: `Attacks all enemies. Inflicts a critical hit against targets under [Block Active Skills] debuffs. Heals by 20% of the damage inflicted.<br><br><br>Heal Multiplier: Damage Dealt*0.2`,
          damage: "3.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crumble",
          description: `Attacks all enemies. Has a 75% chance of placing a [Block Active Skills] debuff for 2 turns. Also has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 795",
        "DEF": "804",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 70`,
};
