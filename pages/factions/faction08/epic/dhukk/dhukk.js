const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mad Chopper",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "1.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lunatic Outburst",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Also has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns on each critical hit.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shrieking Display",
          description: `Places a [Provoke] debuff for 1 turn on the target enemy. Also has a 75% chance of placing a [Provoke] debuff for 1 turn on 2 random enemies.<br><br>Places a 30% [Reflect Damage] buff on this Champion for 2 turns and an [Unkillable] buff on this Champion for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "870",
        "DEF": "1 376",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 31%`,
};
