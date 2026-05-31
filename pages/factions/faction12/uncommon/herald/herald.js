const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Doombolt",
          description: `Attacks 1 enemy. Has a 15% chance of placing a 15% [Decrease SPD] debuff for 1 turn.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Unholy Grace",
          description: `Places a 30% [Increase C. RATE] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "782",
        "DEF": "848",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
