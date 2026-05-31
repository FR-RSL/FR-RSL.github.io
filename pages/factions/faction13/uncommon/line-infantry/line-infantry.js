const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spear Goad",
          description: `Attacks 1 enemy.<br><br>Has a 10% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "1.65*DEF+2.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rabble Rouser",
          description: `Attacks 2 times at random.<br><br>Has a 25% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "738",
        "DEF": "1 123",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
