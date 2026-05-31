const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feint",
          description: `Attacks 1 enemy. Has an extra 25% chance of inflicting a critical hit.`,
          damage: "2.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poisonous Lily",
          description: `Attacks 1 enemy 3 times. Each hit has a 35% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "1.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lead the Charge",
          description: `Attacks 1 enemy with 2 random allies. Allies joining the attack use their default skills.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 476",
        "DEF": "749",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Arena by 16%`,
};
