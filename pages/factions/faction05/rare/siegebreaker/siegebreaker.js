const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pelting Blows",
          description: `Attacks 1 enemy 2 times.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Electrocute",
          description: `Attacks 1 enemy. Has an 80% chance of placing a [Block Active Skills] debuff for 1 turn if this attack is critical.`,
          damage: "6.6*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Heavenly Roar",
          description: `Places a 30% [Increase C. RATE] buff on this Champion for 2 turns, then attacks all enemies. Has a 50% Chance of decreasing the Turn Meter by 30% if this attack is critical.`,
          damage: "4.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 211",
        "DEF": "881",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
