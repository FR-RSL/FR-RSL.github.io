const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nightmare",
          description: `Attacks 1 enemy 2 times. Each hit decreases the target's Turn Meter by 7.5% if the target is under a [Fear] or a [True Fear] debuff. <br><br>Reduces the cooldown of this Champion's Taste of Despair [P] skill by 1 turn if this attack kills an enemy.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Haunted Machete",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Fear] debuff for 1 turn and a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns. <br><br>Has a 75% chance of placing a [True Fear] debuff on 2 enemies for 1 turn if this attack kills an enemy. One [True Fear] debuff will be placed on the enemy with the lowest Turn Meter, while one will be placed on the enemy with the highest Turn Meter.`,
          damage: "5.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Well-Used Axe",
          description: `Revive on Death Attacks 1 enemy. Will ignore 35% of target's DEF if the target is under a [Fear] or a [True Fear] debuff. <br><br>Places a [Block Debuffs] buff for 1 turn, a 30% [Increase SPD] buff for 2 turns, and a [Revive On Death] buff for 2 turns on this Champion if this attack kills an enemy.`,
          damage: "6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Taste of Despair [P]",
          description: `6 Turns<br>Fills this Champion’s Turn Meter by 50% whenever an enemy’s HP drops below 20%.`,
          levelInfo: ["Level 1: Cooldown -1", "Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 398",
        "DEF": "1 024",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
