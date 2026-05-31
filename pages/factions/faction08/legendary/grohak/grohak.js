const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sap Swiftness",
          description: `Attacks 2 times at random. Each hit has a 35% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Unbound Anger",
          description: `Attacks all enemies. Each critical hit fills this Champion's Turn Meter by 20%.`,
          damage: "3.7*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lord of War",
          description: `Attacks 1 enemy and steals the target's Turn Meter. Places a 25% [Weaken] debuff for 2 turns if this attack is critical.`,
          damage: "5.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 487",
        "DEF": "1 046",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 24%`,
};
