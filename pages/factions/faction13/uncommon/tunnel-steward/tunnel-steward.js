const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vermin Killer",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 2.5% [Poison] debuff for 2 turns.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Intensify",
          description: `Attacks 1 enemy. Has a 50% chance of increasing the duration of 2 random debuffs on the target by 1 turn.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%", "Level 7: Damage +5%", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "8 925",
        "ATQ": "1 255",
        "DEF": "903",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
