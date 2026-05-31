const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Break Defense",
          description: `Attacks 1 enemy 2 times. Has a 55% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Raging Beast",
          description: `Attacks all enemies. Puts one of each target's Skills on cooldown.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Decapitate",
          description: `Attacks 1 enemy. Will ignore DEF. Enemies killed by this skill cannot be revived.`,
          damage: "3.6*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "1 465",
        "DEF": "848",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
