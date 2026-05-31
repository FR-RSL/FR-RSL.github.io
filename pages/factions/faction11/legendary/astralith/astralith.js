const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Assault Leader",
          description: `Attacks 1 enemy. Fills the Turn Meter of a random ally by 15%. Fills the Turn Meter of all allies by a further 15% if this attack is critical.`,
          damage: "ATK*3.6",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Heart Rot",
          description: `Attacks 1 enemy. Places two [Bomb] debuffs that detonate after 1 turn. This debuff cannot be resisted.<br><br><br>Bomb Multiplier: ATK*5`,
          damage: "ATK*5.6",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Judgement",
          description: `[Active Effect]<br><br>Exchanges remaining HP levels with a target enemy, then attacks with the default skill. Cannot be used on a boss.<br><br>[Passive Effect]<br><br>Gains an Extra Turn and decreases the cooldown of this Skill by 3 turns if this Champion's HP drops below 20% when attacked.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 487",
        "DEF": "947",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 28%`,
};
