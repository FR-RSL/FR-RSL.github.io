const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Light of Scrutiny",
          description: `Attacks 1 enemy. Has a 40% chance of removing 1 random buff. Has a 50% chance of stealing 1 random buff instead if the target has 3 or more buffs.`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Triumph Cry",
          description: `Attacks all enemies. Has a 50% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "4.25*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Focused",
          description: `Places a 25% [Increase ATK] buff and a 15% [Increase C. RATE] buff on this Champion for 3 turns, then attacks all enemies.`,
          damage: "3.9*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 233",
        "DEF": "782",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
