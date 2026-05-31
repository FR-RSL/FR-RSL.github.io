const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vicious Swipes",
          description: `Attacks 1 enemy 2 times.`,
          damage: "2.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dark Burst",
          description: `Attacks 1 enemy. Has a 60% chance of placing a [Bomb] that detonates in 3 turns.<br><br><br>Bomb Multiplier: 3*ATK`,
          damage: "2.8*ATK+0.2*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "639",
        "DEF": "903",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
