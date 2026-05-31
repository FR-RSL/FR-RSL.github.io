const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hold the Line",
          description: `Attacks 1 enemy. Increases this Champion's DEF by 3% (up to 10 times in one round).`,
          damage: "3.65*ATK+DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Contemptuous Blow",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Provoke] debuff on the target for 1 turn.`,
          damage: "5.5*DEF+ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Comeback [P]",
          description: `When this Champion is hit with a critical hit, counterattacks using their default skill and decreases the buffs duration on the target by 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "914",
        "DEF": "1 134",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 19%`,
};
