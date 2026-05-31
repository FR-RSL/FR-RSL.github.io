const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Venom Arrow",
          description: `Attacks 1 enemy. Places a 5% [Poison] debuff for 2 turns if the attack is critical. Has a 25% chance of granting an Extra Turn.`,
          damage: "3.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Impressive Shot",
          description: `Attacks 1 enemy. Fills the Turn Meter of all allies by 20%. Has an extra 25% chance of inflicting a critical hit.`,
          damage: "5.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Thorns",
          description: `Attacks 4 times at random. Each hit has a 35% chance to ignore DEF.`,
          damage: "1.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Damage +15%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 432",
        "DEF": "892",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 20%`,
};
