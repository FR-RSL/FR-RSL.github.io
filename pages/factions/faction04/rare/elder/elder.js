const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mocking Blow",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Intercede",
          description: `Places a 50% [Ally Protection] on the most injured ally for 2 turns. Grants an Extra Turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Take Vengeance",
          description: `Places a [Counterattack] buff on this Champion for 2 turns. Heals this Champion by 15%.<br><br><br>Heal Multiplier: 0.15*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "914",
        "DEF": "1 123",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
