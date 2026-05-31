const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brutal Force",
          description: `Attacks 1 enemy 3 times. Each hit has a 25% chance of placing a [Provoke] debuff for 1 turn. <br><br>Each hit also heals this Champion and the ally with the lowest HP by 3% of this Champion's MAX HP.<br><br><br>Heal Multiplier: 0.03*HP`,
          damage: "1*DEF",
          levelInfo: ["Level 2: Damage +15%", "Level 3: Damage +15%", "Level 4: Heal +10%", "Level 5: Heal +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Marauder",
          description: `Attacks 1 enemy. <br><br>Steals all buffs from the target, and places a [Provoke] debuff on them for 3 turns. Also has a 50% chance of placing a [Provoke] debuff on all other enemies for 1 turn.<br><br>Then places a [Shield] buff on all allies for 2 turns. The value of the [Shield] is proportional to this Champion's DEF.<br><br><br>Shield Multiplier: 3*DEF`,
          damage: "4.3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +20%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Standstill [P]",
          description: `Whenever an ally under a [Shield] buff is hit by an enemy, heals that ally by 25% of the damage dealt to the [Shield].<br><br>Increases this Champion's DEF by 10% for each enemy under a [Provoke] debuff. Will also increase this Champion's DEF by 5% for each enemy not under a [Provoke] debuff.<br><br>Heal Multiplier: 0.25*damageAbsorbedByShield`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "848",
        "DEF": "1 465",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
