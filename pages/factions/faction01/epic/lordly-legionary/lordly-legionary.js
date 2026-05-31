const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Press the Fight",
          description: `Attacks 1 enemy 2 times. Places an extra hit if the target is under a 50% [Heal Reduction] debuff. Places 2 extra hits if the target is under a 100% [Heal Reduction] debuff.`,
          damage: "0.75*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Outflank",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns. Decreases the target's Turn Meter by 20% if the [Decrease SPD] debuff is placed.`,
          damage: "5.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Legion's Orders",
          description: `Places a 30% [Reflect Damage] buff and a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 1: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 354",
        "DEF": "947",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
