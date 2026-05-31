const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mangle Limbs",
          description: `Attacks 1 enemy 2 times. Has a 25% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.85*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brutal Battering",
          description: `Attacks all enemies 1 by 1 in random order. Damage inflicted decreases by 25% after each hit.`,
          damage: "6.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Boom Barrage",
          description: `Attacks all enemies. Places a [Bomb] that detonates after 2 turns.<br><br><br>Bomb Multiplier: 4*ATK`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 400",
        "ATQ": "1 321",
        "DEF": "1 222",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Dungeons by 24%`,
};
