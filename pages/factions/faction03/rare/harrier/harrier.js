const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Trick Shot",
          description: `Attacks 1 enemy. Has a 15% chance of placing an extra hit.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Puncture Bolts",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "2.5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Deadeye's Strike",
          description: `Attacks 1 enemy. Has an extra 30% chance of inflicting a critical hit.`,
          damage: "5.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Skillful Partner [P]",
          description: `Will ignore 50% of the target's DEF when this Champion inflicts a critical hit.<br><br>[Only available when Hospitaller is on the same team.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 376",
        "DEF": "749",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
