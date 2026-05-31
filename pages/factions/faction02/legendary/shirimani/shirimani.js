const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bolts of Cold",
          description: `Attacks 3 times at random. Has a 25% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "1.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rejuvenating Wave",
          description: `Heals 1 ally by 50% and other allies by 20% of their MAX HP. Places a 15% [Continuous Heal] buff for 2 turns on targets with full HP.<br><br><br>Heal Multiplier: 0.5*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ice Storm",
          description: `Attacks all enemies. Has an 80% chance of placing a [Freeze] debuff for 1 turn. Fills this Champion's Turn Meter by 10% for each attacked enemy.`,
          damage: "4.1*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "1 167",
        "DEF": "1 079",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 33%`,
};
