const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chop",
          description: `Attacks 1 enemy. Has a 50% chance of decreasing the duration of all buffs on the target by 2 turns.`,
          damage: "4.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Thunderclap",
          description: `Attacks 4 times at random. Each hit has a 30% chance of applying a [Block Buffs] debuff for 2 turns.`,
          damage: "ATK+0.03*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prayer",
          description: `Places a [Block Debuffs] buff and a [Counterattack] buff on this Champion for 2 turns. Also places a 15% [Continuous Heal] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "826",
        "DEF": "925",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 27%`,
};
