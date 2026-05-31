const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Meat Masher",
          description: `Attacks 1 enemy. Has a 10% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Massive Bulk",
          description: `Places a [Shield] buff on all allies equal to 10% of this Champion's MAX HP for 2 turns.<br><br><br>Shield Multiplier: 0.1*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "683",
        "DEF": "870",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
