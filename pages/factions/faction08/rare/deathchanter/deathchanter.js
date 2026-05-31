const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Clobber",
          description: `Attacks 1 enemy. Places a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is equal to 20% of the damage inflicted.<br><br><br>Shield Multiplier: 0.2*Damage Dealt`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bully",
          description: `Attacks 1 enemy.<br><br>Damage increases according to this Champion's current HP.`,
          damage: "(4.9+2*Current HP %)*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bleed Out",
          description: `Attacks 1 enemy. Places a 100% [Heal Reduction] debuff for 3 turns.`,
          damage: "6.7*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "815",
        "DEF": "903",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Arena by 27%`,
};
