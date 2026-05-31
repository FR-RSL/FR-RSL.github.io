const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flurry",
          description: `Attacks 2 times at random. Has a 25% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sealing Arrow",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 50% [Heal Reduction] debuff for 2 turns.`,
          damage: "8.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +20%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 080",
        "ATQ": "1 112",
        "DEF": "969",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
