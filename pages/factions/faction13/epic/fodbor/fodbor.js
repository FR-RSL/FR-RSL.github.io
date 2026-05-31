const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Axe Solo",
          description: `Attacks 1 enemy 3 times. Has a 15% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "1.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Robber's Tale",
          description: `Attacks 1 enemy. Has an 80% chance of stealing 2 random buff from the target. Has an 80% chance of placing a [Stun] debuff for 1 turn instead if the target has no active buffs.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Awful Crooning",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 454",
        "DEF": "826",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
