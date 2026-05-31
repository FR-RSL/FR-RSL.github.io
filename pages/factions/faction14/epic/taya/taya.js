const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Daze Powder",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.65*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Venom Kunai",
          description: `Attacks 1 enemy 3 times. Each hit has a 75% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "1.95*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blood Boil",
          description: `Attacks 1 enemy. Has a 75% chance of instantly activating one tick of all [Poison] debuffs and [HP Burn] debuffs on the target. Also has a 75% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 465",
        "DEF": "980",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 50`,
};
