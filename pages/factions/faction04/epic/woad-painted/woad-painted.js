const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crossup",
          description: `Attacks 1 enemy 2 times. Has a 25% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "0.13*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Undying Fury",
          description: `Removes all debuffs from this Champion and 1 random debuff from all allies, then heals this Champion by 100% of their MAX HP and heals all allies equal to 50% of the surplus heal. Afterwards, places a 30% [Reflect Damage] buff on all allies for 2 turns, then grants this Champion an Extra Turn.<br><br><br>Heal Multiplier: 1*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Overpower",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Block Active Skills] debuff for 2 turns.`,
          damage: "0.42*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 013",
        "DEF": "969",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
