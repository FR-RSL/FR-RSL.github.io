const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rattle",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "4.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Headbutt",
          description: `Attacks 1 enemy 2 times. Has a 25% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "738",
        "DEF": "815",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
