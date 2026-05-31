const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tangle Bash",
          description: `Attacks 1 enemy. Has a 25% chance of decreasing the target’s Turn Meter by 10%.`,
          damage: "4.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Noble Stand",
          description: `Places a 30% [Increase DEF] buff on this Champion and the ally with the lowest HP for 2 turns. Also fills this Champion’s Turn Meter by 25%.`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fury Swipe",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "6.3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "958",
        "DEF": "1 035",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 17%`,
};
