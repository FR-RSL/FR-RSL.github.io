const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Harvest of Blood",
          description: `Attacks 1 enemy. Has a 30% chance of decreasing the cooldown of one of a random ally's Skills by 1 turn.`,
          damage: "2.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maelstrom",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Decreases the Turn Meter of each target by 20% if they are not under a [Decrease ATK] debuff.`,
          damage: "3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Alacrity",
          description: `Places a 30% [Increase SPD] buff on all allies for 2 turns and boosts their Turn Meter by 20%.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 134",
        "DEF": "936",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 40`,
};
