const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Burning Iron",
          description: `Attacks 1 enemy 2 times. Has a 20% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "2.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Despair",
          description: `Attacks all enemies. Has a 35% chance of placing a [Stun] debuff for 1 turn. Damage inflicted is proportional to enemy MAX HP.`,
          damage: "0.1*Target Max HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Retaliate",
          description: `Attacks 1 enemy. Damage increases according to this Champion's current HP.`,
          damage: "0.33*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "969",
        "DEF": "936",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Arena by 30%`,
};
