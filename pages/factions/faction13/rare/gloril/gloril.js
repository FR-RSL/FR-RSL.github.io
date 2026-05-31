const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Scale Hacker",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.68*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Prey Acquired",
          description: `Attacks 1 enemy. Damage increases by 5% for each debuff on the target.`,
          damage: "6.1*ATK*(1+0.05*Target Debuffs)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Heroic Company",
          description: `Attacks 1 enemy. Places a 15% [Increase C. RATE] buff on all allies for 2 turns if this attack is critical.`,
          damage: "6.04*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 244",
        "DEF": "705",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 30`,
};
