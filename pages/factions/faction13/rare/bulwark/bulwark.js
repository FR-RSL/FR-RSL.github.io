const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hefty Flail",
          description: `Attacks 1 enemy 2 times.<br>Each hit has a 15% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "1.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Meteoric Ignition",
          description: `Attacks 1 enemy.<br>Has a 75% chance of placing a [HP Burn] debuff for 2 turns.`,
          damage: "5.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Punishing Defenses [P]",
          description: `When attacked, has a 30% chance of extending the duration of all debuffs on the attacker by 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "837",
        "DEF": "1 266",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 17%`,
};
