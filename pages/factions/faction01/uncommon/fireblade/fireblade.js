const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Burning Spear",
          description: `Attacks 1 enemy. Places a 25% [Decrease ATK] debuff for 2 turns if this attack is critical.`,
          damage: "100+3.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Path of Flame",
          description: `Attacks 1 enemy 3 times. Each hit has a 30% chance of placing a 2.5% [Poison] debuff for 2 turns.`,
          damage: "2.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 080",
        "ATQ": "1 178",
        "DEF": "903",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
