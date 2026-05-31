const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grave's Grasp",
          description: `Attacks 2 times at random.<br><br>Each hit has a 35% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crippling Cold",
          description: `Attacks all enemies.<br><br>Places a 50% [Decrease ATK] debuff for 2 turns. Also has a 50% chance of placing a [Block Active Skills] debuff for 2 turns.`,
          damage: "3.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fateful Arrival [P]",
          description: `Always goes first each Round.<br><br>If multiple Hegemons are in battle, the Hegemon with the highest SPD will move first, followed by the next highest, and so on.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 150",
        "ATQ": "1 487",
        "DEF": "815",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 19%`,
};
