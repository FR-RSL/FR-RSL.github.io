const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wanton Mugging",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of stealing one random buff.`,
          damage: "0.08*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ruckus",
          description: `Attacks 1 enemy. Will ignore the target's DEF if they have no active buffs. Steals 2 random buffs from the target.`,
          damage: "0.15*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dire Defense",
          description: `Has a 30% chance of stealing 1 random buff from the attacker when hit. Occurs once per hit.<br><br>Counterattacks the attacker if they have no active buffs.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "870",
        "DEF": "1 057",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
