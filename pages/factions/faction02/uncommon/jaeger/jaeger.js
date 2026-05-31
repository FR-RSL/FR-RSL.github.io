const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shackle Shot",
          description: `Attacks 1 enemy. Has a 10% chance of placing a 15% [Decrease SPD] debuff for 1 turn.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Freezing Arrow",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "6.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +20%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 200",
        "DEF": "595",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
