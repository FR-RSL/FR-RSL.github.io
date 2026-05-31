const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hack and Slash",
          description: `Attacks 1 enemy 3 times.`,
          damage: "1.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rise to Duty",
          description: `Places a 25% [Increase ATK] buff and a 30% [Increase C. RATE] buff on this Champion for 2 turns, then attacks all enemies.<br><br>[Has a 75% chance of placing a [Bomb] debuff that will detonate after 3 turns when Fenax is on the same team.]<br><br><br>Bomb Multiplier:`,
          damage: "3.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Awesome Presence",
          description: `Places a [Counterattack] buff on this Champion for 2 turns. Has a 75% chance of placing a 25% [Weaken] debuff on enemies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 343",
        "DEF": "1 134",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Dungeons by 15%`,
};
