const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Enchanted Rapier",
          description: `Attacks 1 enemy 2 times. Each hit has a 15% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "2.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pommel Strike",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Stun] debuff for 1 turn. Steals 20% of the target’s Turn Meter if the [Stun] debuff is not placed.`,
          damage: "5.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blade Flourish",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 211",
        "DEF": "793",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 23%`,
};
