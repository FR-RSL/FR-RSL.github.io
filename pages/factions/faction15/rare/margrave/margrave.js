const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hawktalon",
          description: `Attacks 1 enemy. Places a 7.5% [Continuous Heal] buff for 1 turn on the ally with the lowest HP.`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Emotionless Rampage",
          description: `Attacks 3 times at random. Each hit has a 50% chance of placing a [Provoke] debuff for 1 turn. <br><br>Also places a 30% [Reflect Damage] buff on this Champion for 2 turns.`,
          damage: "0.12*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Living Barricade",
          description: `Places a 25% [Ally Protection] buff on all allies except this Champion for 2 turns. <br><br>Also places a 30% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "760",
        "DEF": "980",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
