const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nightmare Khopesh",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Evil Seed",
          description: `Attacks 1 enemy. Places a [Block Buffs] debuff and a 100% [Heal Reduction] debuff for 2 turns. <br><br>Will ignore any [Shield] buffs.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crawling Chaos",
          description: `Removes all debuffs from this Champion, then attacks all enemies. Places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 1 turn after attacking.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Incarnate [P]",
          description: `Enemies under [Block Active Skills], [Block Buffs], and [Heal Reduction] debuffs cannot decrease this Champion’s Turn Meter.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 409",
        "DEF": "969",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Dungeons by 24%`,
};
