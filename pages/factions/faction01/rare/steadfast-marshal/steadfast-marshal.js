const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thunderous Whallop",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Provoke] debuff for 1 turn if the target's HP percentage is lower than this Champion's.`,
          damage: "0.15*HP",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hold Fast",
          description: `Places a 60% [Increase DEF] buff on this Champion for 2 turns. Grants an Extra Turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Covered Retreat",
          description: `Places a [Veil] buff on all allies except this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "870",
        "DEF": "782",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
