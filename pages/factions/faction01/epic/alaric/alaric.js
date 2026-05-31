const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Red Fury",
          description: `Attacks 1 enemy. Has a 30% chance of decreasing the target’s Turn Meter by 7.5%. Decreases the Turn Meter by a further 3% for each buff on the target.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Demand Chivalry",
          description: `Attacks 1 enemy. Has a 50% chance of removing 2 random buffs from the target before attacking. Has a 75% chance of stealing 2 random buffs instead if the target has 4 or more buffs.`,
          damage: "5.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crimson Warlord",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff and a 50% [Decrease ACC] debuff on all enemies for 2 turns.`,
          damage: "3.85*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 454",
        "DEF": "793",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 29%`,
};
