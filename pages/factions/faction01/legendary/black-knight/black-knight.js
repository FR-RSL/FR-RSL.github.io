const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Heavy Blow",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "0.28*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lower Visor",
          description: `Places a 15% [Continuous Heal] buff and a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Last Breath",
          description: `Attacks all enemies. Damage increases according to the amount of HP this Champion has lost.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Valorous [P]",
          description: `Places an [Unkillable] buff on this Champion for 1 turn if incoming damage exceeds 15% MAX HP in one attack.`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "914",
        "DEF": "1 167",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = null;
