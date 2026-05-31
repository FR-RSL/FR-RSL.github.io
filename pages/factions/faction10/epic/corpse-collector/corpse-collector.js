const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Insidious Parasite",
          description: `Attacks 1 enemy.<br><br>Has a 40% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hailfire",
          description: `Attacks all enemies.<br><br>Has a 75% chance of placing a 100% [Heal Reduction] debuff and a 50% [Decrease ACC] debuff on all enemies for 2 turns.`,
          damage: "2.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Noxious Escape",
          description: `Attacks 3 times at random.<br>Each hit has a 75% chance of placing a 5% [Poison] debuff for 2 turns.<br>Places a [Veil] buff on this Champion for 1 turn.`,
          damage: "1.65*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 167",
        "DEF": "991",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Arena by 40`,
};
