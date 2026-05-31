const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gelid Beam",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frost Armaments",
          description: `Places a 25% [Increase ATK] buff on all allies for 2 turns. Places a 30% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mental Overload",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "4.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 068",
        "DEF": "870",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 13%`,
};
