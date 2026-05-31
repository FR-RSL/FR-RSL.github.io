const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bone Crunch",
          description: `Attacks 1 enemy. Has a 35% chance of decreasing the target’s Turn Meter by 10%.`,
          damage: "0.19*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Foot Stomp",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Skull Fracture",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "0.28*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "694",
        "DEF": "1 002",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
