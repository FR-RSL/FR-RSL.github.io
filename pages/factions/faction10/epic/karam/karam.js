const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bloodstained Swords",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fit of Rage",
          description: `Attacks 1 enemy. Has an extra 15% chance of inflicting a critical hit. Damage increases by 50% if this Champion has more than 50% HP.`,
          damage: "6.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rot Away",
          description: `Attacks 1 enemy. Instantly activates all [Poison] debuffs on the target.`,
          damage: "6.5*ATKMultiplier: Poison Debuff Count*0.5Multiplier: Poison Debuff Count",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 354",
        "DEF": "1 068",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 40`,
};
