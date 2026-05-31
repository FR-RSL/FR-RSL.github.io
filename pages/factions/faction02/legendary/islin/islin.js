const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Doubleslash",
          description: `Attacks 1 enemy 2 times. Each hit has a 35% chance of placing a [Provoke] debuff for 1 turn. When counterattacking, the chance increases to 50%.`,
          damage: "1.8*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hindrance",
          description: `Attacks all enemies. Before attacking, has a 75% chance of decreasing the duration of all enemy buffs by 1 turn. <br><br>Has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flawless Strategem",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns, and places a 60% [Increase DEF] buff on all allies for 2 turns. <br><br>Also places a [Counterattack] buff on this Champion for 2 turns. Then, places a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is proportional to this Champion’s DEF.<br><br><br>Shield Multiplier: 4*DEF`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Protect The Troops [P]",
          description: `Whenever this Champion is attacked, heals themselves by 1% for each 500 DEF this Champion has. <br><br>Heals all other allies under [Ally Protection] buffs placed by this Champion by 30% of this skill's initial heal.<br><br>Heal Multiplier: ((DEF/500)*0.01)*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "760",
        "DEF": "1 520",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in all Battles by 60`,
};
