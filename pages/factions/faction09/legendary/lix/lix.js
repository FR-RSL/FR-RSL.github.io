const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Festering Caress",
          description: `Attacks 1 enemy 2 times. Has a 30% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "1.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mire of Misery",
          description: `Attacks all enemies 3 times. Each hit has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns. Each hit also has a 75% chance of decreasing the enemy’s Turn Meter by 10%.`,
          damage: "1.15*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Time Dilation",
          description: `Attacks all enemies. Has a 75% chance of placing a [Block Active Skills] debuff for 2 turns.<br><br>Also decreases the cooldowns of all ally skills, except this Champion's, by 1 turn.`,
          damage: "4*ATK",
          cooldown: 7,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unredeemed [P]",
          description: `Removes one random debuff from Astralon and this Champion at the start of each turn.<br><br>Only available if Astralon is on the team.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Channel Woe [P]",
          description: `Fills this Champion’s Turn Meter by 5% each time an ally receives a debuff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 498",
        "DEF": "936",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = null;
