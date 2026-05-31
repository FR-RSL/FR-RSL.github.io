const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hunt Down",
          description: `Attacks 1 enemy. Has an extra 30% chance of inflicting a critical hit.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Armor Breaker",
          description: `Places a 60% [Decrease DEF] debuff for 2 turns, then attacks 1 enemy. Has an extra 30% chance of inflicting a critical hit.`,
          damage: "5.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Charged Shot",
          description: `Attacks 1 enemy. Places a 30% [Decrease SPD] debuff for 2 turns. Decreases the target's Turn Meter by 50%. Has an extra 30% chance of inflicting a critical hit.`,
          damage: "6.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 542",
        "DEF": "837",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Faction Wars by 20%`,
};
