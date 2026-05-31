const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Swing",
          description: `Attacks 1 enemy.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Energizing Presence",
          description: `Increases the duration of all buffs on all allies by 1 turn. Also decreases the duration of all debuffs on all allies by 1 turn. Places a 25% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Protect",
          description: `Places a [Shield] buff on all allies for 2 turns. The value of the [Shield] depends on this Champion's Level. Heals each ally according to the number of buffs they are currently under.<br><br><br>Shield Multiplier: 75*HERO_LEVEL<br>Heal Multiplier: 0.05*Target Max HP*Active Target Buffs`,
          cooldown: 5,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "969",
        "DEF": "1 002",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 22%`,
};
