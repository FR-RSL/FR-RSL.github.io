const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spot Quarry",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Huntmaster",
          description: `Attacks all enemies. Has a 70% chance of placing a 60% [Decrease DEF] debuff and a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lead the Pack [P]",
          description: `Places a 50% [Increase ACC] buff on an ally for 1 turn each time the ally has a debuff resisted by an enemy.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "859",
        "DEF": "1 046",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
