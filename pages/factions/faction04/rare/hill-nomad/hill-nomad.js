const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sandstorm Blade",
          description: `Attacks 1 enemy.<br><br>Has a 50% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nomad's Endurance",
          description: `Places a 7.5% [Continuous Heal] buff on an ally for 2 turns.`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ambush Tactics",
          description: `Places a [Veil] buff on an ally for 1 turn, and a 25% [Increase ATK] buff for 2 turns.<br><br>Also places a [Shield] buff on this Champion equal to 20% of their MAX HP for 2 turns.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 145",
        "DEF": "958",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
