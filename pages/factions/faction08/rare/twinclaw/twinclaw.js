const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Disfigure",
          description: `Attacks 1 enemy. Has a 35% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tendon Carve",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "5.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tear to Shreds",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Block Active Skills] debuff for 2 turns. The chance increases to 100% if the target is under a [Heal Reduction] debuff.`,
          damage: "5.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 565",
        "ATQ": "1 365",
        "DEF": "892",
        "VIT": "85",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
