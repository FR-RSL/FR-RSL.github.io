const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brute Strength",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Burning Blade",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [HP Burn] debuff for 4 turns.`,
          damage: "0.4*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sear Away",
          description: `Attacks 1 enemy. Destroys the target's MAX HP by 30% of the damage inflicted. Damage increases by 50% if the target is under a [HP Burn] debuff.`,
          damage: "0.43*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "991",
        "DEF": "1 200",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 29%`,
};
