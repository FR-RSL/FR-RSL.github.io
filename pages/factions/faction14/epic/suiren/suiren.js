const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lotus Kiss",
          description: `Attacks 1 enemy 2 times. Each hit has a 40% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Downsize",
          description: `Attacks 1 enemy 2 times. Each hit has a 60% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "3.1*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Confusion Reigns",
          description: `Attacks all enemies. Has a 60% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 310",
        "DEF": "1 035",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Dungeons by 60`,
};
