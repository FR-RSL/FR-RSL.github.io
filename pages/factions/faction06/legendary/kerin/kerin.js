const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Biting Infestation",
          description: `Attacks all enemies. <br><br>Has a 50% chance of placing a 30% [Decrease SPD] debuff for 2 turns. <br><br>Steals 5% of each enemy’s Turn Meter. Steals 10% of each enemy’s Turn Meter instead, if they’re under a [Decrease SPD] debuff.`,
          damage: "4.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Threshmaster",
          description: `Attacks 1 enemy. <br><br>Puts all of the target’s skills on cooldown. <br><br>Has a 75% chance of decreasing the Turn Meters of all enemies under a [Sleep] debuff by 15%. Has a 75% chance of decreasing the Turn Meters of all enemies without a [Sleep] debuff by 30% instead.`,
          damage: "7.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sleepstingers",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a [Sleep] debuff on all enemies for 1 turn. Will ignore any [Block Debuffs] buffs. <br><br>Then grants an Extra Turn.`,
          damage: "5.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Weed Out [P]",
          description: `[Passive Effect]<br><br>Whenever an enemy attempts to increase their Turn Meter, decreases the value of that Turn Meter fill effect by 25%. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>[Active Effect]<br><br>Whenever a [Sleep] debuff is removed or expires on a target, instantly activates the [Threshmaster] skill on that target. Does not work if a [Sleep] debuff is removed by damage. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "837",
        "DEF": "1 266",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Arena by 80`,
};
