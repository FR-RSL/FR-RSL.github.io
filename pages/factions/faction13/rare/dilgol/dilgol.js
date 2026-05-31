const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crippler Round",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.35*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shot Spray",
          description: `Attacks all enemies 2 times. Each hit has a 50% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "2.27*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Big Game Hunter",
          description: `Attacks 1 enemy 3 times. Each hit has a 40% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "2.45*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 046",
        "DEF": "947",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
