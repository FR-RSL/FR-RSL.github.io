const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Darklight Spears",
          description: `Attacks 1 enemy 3 times. Each hit has a 35% chance of decreasing the target's Turn Meter by 5%. If the target is under a [Decrease SPD] debuff, each hit has a 35% chance of decreasing the target's Turn Meter by 10% instead.`,
          damage: "1.55*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Reduce To Ash",
          description: `Attacks all enemies. Has a 50% chance of placing a 15% [Decrease SPD] debuff for 2 turns. Heals all allies by 15% of their MAX HP.`,
          damage: "4.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rite of Flame",
          description: `Places a 30% [Increase SPD] buff on all allies for 2 turns. Fills the Turn Meters of all allies by 15%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "848",
        "DEF": "991",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 16%`,
};
