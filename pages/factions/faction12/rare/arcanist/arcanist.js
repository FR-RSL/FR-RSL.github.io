const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Paralyzing Touch",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Sleep] debuff for 1 turn.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Unnatural Recovery",
          description: `Places a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vigor",
          description: `Places a 25% [Increase ATK] buff and a 15% [Increase C. RATE] buff on all allies for 3 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "991",
        "DEF": "848",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Arena by 25%`,
};
