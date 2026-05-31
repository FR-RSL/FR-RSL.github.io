const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tireless Anger",
          description: `Attacks 1 enemy. Fills this Champion's Turn Meter by 25%.`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dark Exhaustion",
          description: `Attacks 1 enemy. Has a 75% chance of decreasing the target's Turn Meter by 50%.`,
          damage: "6.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +15%", "Level 7: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Liberation",
          description: `Removes all debuffs on all allies.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "749",
        "DEF": "1 266",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 30%`,
};
