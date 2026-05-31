const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bleed Dry",
          description: `Attacks 1 enemy 2 times. Has an extra 15% chance of inflicting a critical hit. Has a 50% chance of placing a 2.5% [Poison] debuff for 2 turns If this attack is critical.`,
          damage: "ATK*1.5",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lethal Confusion",
          description: `Attacks all enemies. Has a 50% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "ATK*3.5",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Suppression [P]",
          description: `Attacks an enemy Champion with the default Skill whenever they are healed or receive a Buff. Attacks one random enemy if multiple enemies are healed or receive a Buff at the same time.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 409",
        "DEF": "815",
        "VIT": "95",
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
