const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Leg Pierce",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Somnolent Toxin",
          description: `Attacks 1 enemy. Has a 45% chance of placing a [Sleep] debuff for 2 turns. Places a 15% [Weaken] debuff for 2 turns if this Skill does not place a [Sleep] debuff.`,
          damage: "5.8*DEF",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ward Off",
          description: `Decreases the Turn Meter of all enemies by 15%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "881",
        "DEF": "1 123",
        "VIT": "84",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
