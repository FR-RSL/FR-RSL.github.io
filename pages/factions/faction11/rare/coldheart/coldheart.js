const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flurry of Arrows",
          description: `Attacks 4 times at random. Each hit has a 25% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "0.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Art of Pain",
          description: `Attacks all enemies. Has a 30% chance of placing a 50% [Decrease ACC] debuff for 1 turn. Places a 5% [Poison] debuff for 2 turns if the target is under a [Heal Reduction] debuff.`,
          damage: "3.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Heartseeker",
          description: `Attacks 1 enemy. Decreases the target's Turn Meter by 100%. Has an extra 30% chance of inflicting a critical hit. Damage increases according to enemy MAX HP.`,
          damage: "Target Max HP*0.1+ATK*1.7",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 376",
        "DEF": "738",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
