const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wrath Hew",
          description: `Attacks 1 enemy.`,
          damage: "3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Comrades in Arms",
          description: `Places a 25% [Ally Protection] buff on the ally with the lowest HP for 2 turns. Grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 1: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "595",
        "DEF": "1 299",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
