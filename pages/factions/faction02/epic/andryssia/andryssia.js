const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Censorious Bludgeon",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 25% [Decrease C. DMG] debuff for 2 turns.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mind Prison",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Stun] debuff for 1 turn if the target does not have any active buffs. Has a 75% chance of placing a [Stun] debuff for 2 turns if the target does have any active buffs.`,
          damage: "5.7*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pointed Justice",
          description: `Attacks all enemies. Has a 75% chance of decreasing the duration of all enemy buffs by 2 turns. <br><br>Increases the duration of all [Increase DEF] buffs on allies by 1 turn.`,
          damage: "3.7*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Heartstrong [P]",
          description: `At the start of each turn, places a 50% [Ally Protection] buff for 2 turns on the ally with the lowest MAX HP. Will not be placed on this Champion. <br><br>Also places a 25% [Strengthen] buff and a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "793",
        "DEF": "1 288",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
