const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Khopesh Strike",
          description: `Attacks 1 enemy. <br><br>Places a [Leech] debuff for 2 turns. <br><br>Fills this Champion's Turn Meter by 20%.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Desert Zephyr",
          description: `Attacks all enemies. <br><br>Places a 50% [Decrease ACC] debuff and a 50% [Decrease RES] debuff for 2 turns. Also places a [Provoke] debuff on all enemies for 1 turn. If a target is under 3 or more debuffs, places a [Provoke] debuff for 2 turns instead.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prayer of the Medjay",
          description: `Places a 50% [Increase ACC] buff on all allies for 2 turns. Also places a [Perfect Veil] buff and a 60% [Increase DEF] buff on all allies except this Champion for 2 turns. <br><br>Places a 60% [Increase DEF] buff on this Champion for 3 turns.<br><br>Then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Siwa's Pride [P]",
          description: `This Champion and their allies cannot receive critical hits from enemies whose ACC is equal to or lower than their own ACC.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Everything is Permitted [P]",
          description: `Whenever an enemy's HP drops below 25% after receiving damage from any Assassin, they receive additional bonus damage proportional to this Champion's ATK. This bonus damage will ignore 100% of the target's DEF and cannot be critical.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "683",
        "DEF": "1 674",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 70`,
};
