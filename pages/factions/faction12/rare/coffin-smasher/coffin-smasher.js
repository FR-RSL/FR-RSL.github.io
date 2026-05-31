const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mallet Crescendo",
          description: `Attacks 1 enemy 3 times. Each hit has a 15% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.06*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tombfire",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [HP Burn] debuff for 2 turns.`,
          damage: "0.22*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +10%", "Level 9: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gloom Mist [P]",
          description: `Decreases the damage enemies inflict with AoE attacks by 5%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 135",
        "ATQ": "683",
        "DEF": "936",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
