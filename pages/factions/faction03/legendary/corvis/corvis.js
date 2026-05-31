const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Reductive Process",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.1*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Medical Miracle",
          description: `Attacks all enemies 2 times. The first hit increases the duration of all enemy debuffs by 1 turn. The second hit increases the duration of all ally buffs by 1 turn.`,
          damage: "1.9*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Field Research",
          description: `Attacks all enemies 2 times. Each hit has a 75% chance of placing two 5% [Poison] debuffs for 2 turns. <br><br>After attacking, places a 25% [Poison Sensitivity] debuff on enemies under 2 or more [Poison] debuffs.`,
          damage: "2*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Curious Draught [P]",
          description: `Decreases the damage enemies under [Poison] debuffs inflict (5% less damage per [Poison] debuff, stacks up to 25%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "903",
        "DEF": "1 398",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 30%`,
};
