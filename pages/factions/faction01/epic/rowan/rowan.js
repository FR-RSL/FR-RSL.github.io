const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Slash",
          description: `Attacks 1 enemy. Has a 60% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "ATK*(1.9+SPD/100)",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Scourge",
          description: `Attacks 3 times at random. Each hit has a 40% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "1.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blade Surge",
          description: `Attacks 1 enemy 4 times. Each hit has a 75% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "1.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 487",
        "DEF": "694",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 50`,
};
