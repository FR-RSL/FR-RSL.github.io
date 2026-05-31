const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frazzle",
          description: `Attacks all enemies. Has a 20% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "2.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mighty Bellow",
          description: `Attacks all enemies. Has a 50% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bowl Over",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% [Decrease ATK] debuff for 2 turns. Has a 75% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 013",
        "DEF": "914",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 15%`,
};
