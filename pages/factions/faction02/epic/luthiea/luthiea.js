const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Burning Arrow",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ice Shot",
          description: `Attacks 3 times at random. Each hit has a 25% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "2.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Numbing Poison",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 277",
        "DEF": "1 068",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `
Increases Ally C.RATE in Dungeons by 33%`,
};
