const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cut",
          description: `Attacks 1 enemy 2 times. Has a 30% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "8 100",
        "ATQ": "958",
        "DEF": "705",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
