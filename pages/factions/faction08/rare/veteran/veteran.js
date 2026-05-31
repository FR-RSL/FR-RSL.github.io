const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Disarm",
          description: `Attacks 1 enemy 2 times. Has a 35% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Damage inflicted is proportional to DEF.`,
          damage: "1.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +15%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Head Hunter",
          description: `Attacks 1 enemy. Places a 30% [Increase C. RATE] buff on all allies for 3 turns if the target is killed. Damage inflicted is proportional to DEF.`,
          damage: "3.7*DEF+ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Massacre",
          description: `Attacks all enemies. Has a 50% chance of placing a [Block Buffs] debuff for 1 turn. Damage increases according to this Champion's MAX HP.`,
          damage: "DEF+0.23*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "683",
        "DEF": "1 321",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 15%`,
};
