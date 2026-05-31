const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "One-Eyed Beast",
          description: `Attacks 1 enemy. Will place 3 hits if the target is under 3 or more debuffs. Each hit has a 40% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "1.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blood Curdle",
          description: `Attacks all enemies. Has an 80% chance of placing a 50% [Decrease ATK] debuff for 2 turns. <br> <br>After attacking, has an 80% chance of placing a [HP Burn] debuff for 2 turns on all enemies that this skill did not place a [Decrease ATK] debuff on.`,
          damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Kyoku's Horde",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Also places a [Block Damage] buff on this Champion for 3 turns, then grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Wellspring [P]",
          description: `Every time this Champion is hit with a critical hit, heals all allies by 15% of their MAX HP, then places a 60% [Increase DEF] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.15*Target Max HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "804",
        "DEF": "1 487",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 30%`,
};
