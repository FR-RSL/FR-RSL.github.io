const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Scar for Life",
          description: `Attacks 1 enemy. Destroys their MAX HP by 30% of the damage inflicted.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "No Quarter",
          description: `Attacks 1 enemy 2 times. Damage increases as the target's HP decreases.`,
          damage: "3*ATK+(1.5*ATK*(1-Current HP %))",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Heavy Slam",
          description: `Attacks 1 enemy. Will ignore 50% of the target's DEF. Destroys their MAX HP by 40% of the damage inflicted.`,
          damage: "3.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 299",
        "DEF": "936",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 19%`,
};
