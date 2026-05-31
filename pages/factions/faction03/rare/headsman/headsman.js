const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Public Execution",
          description: `Attacks 1 enemy 2 times. Each hit has a 10% chance of placing a [Fear] debuff for 1 turn.`,
          damage: "1.57*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Headman's Due",
          description: `Attacks all enemies. Has a 30% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "3.7*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Judged Guilty [P]",
          description: `Inflicts 15% more damage to targets under [Heal Reduction] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "10 740",
        "ATQ": "1 354",
        "DEF": "958",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
