const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Smash",
          description: `Attacks 1 enemy. Places a 50% [Heal Reduction] debuff if the target's DEF is lower than this Champion's.`,
          damage: "3.7*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stonewall",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Places a [Counterattack] buff on all allies except this Champion for 2 turns. Places an [Unkillable] buff on this Champion for 1 turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unshakeable [P]",
          description: `Decreases the duration of all debuffs on this Champion by 1 turn at the start of each turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "826",
        "DEF": "1 189",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Faction Wars by 45`,
};
