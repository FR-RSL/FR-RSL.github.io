const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hamstring Bite",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rabid Infection",
          description: `Attacks all enemies. Has a 25% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "4.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "826",
        "DEF": "881",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
