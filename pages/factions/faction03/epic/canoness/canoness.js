const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lead the Charge",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 50% [Increase ATK] buff on a random ally for 2 turns.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blinding Assault",
          description: `Attacks 1 enemy. Has an 80% chance of placing a 50% [Decrease ACC] debuff and a [Leech] debuff on the target for 2 turns. This attack is always critical.`,
          damage: "5.7*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Stalwart Guardian",
          description: `Places a 50% [Ally Protection] buff on the target for 2 turns and a 60% [Increase DEF] buff on the target and on this Champion for 2 turns. Also places a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "804",
        "DEF": "1 321",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 20%`,
};
