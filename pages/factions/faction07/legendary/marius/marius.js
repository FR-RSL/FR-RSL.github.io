const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Auric Lance",
          description: `Attacks all enemies. Has a 35% chance of placing an [Enfeeble] debuff for 1 turn.`,
          damage: "2.5*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Death or Glory",
          description: `Attacks all enemies 3 times. Each hit decreases the duration of all enemy buffs by 1 turn.`,
          damage: "1.2*DEF+0.03*Target Max HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Galloping Thunder",
          description: `Places a 50% [Increase ACC] buff and a 60% [Increase DEF] buff on all allies for 3 turns. <br><br>Then places a [Stun] debuff on the enemy with the highest Turn Meter for 1 turn. <br><br>Finally, grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Steadfast Knight [P]",
          description: `This Champion is immune to Turn Meter reduction effects from enemies and [Decrease SPD] debuffs. <br><br>Whenever an enemy changes Form or attempts to decrease this Champion's Turn Meter, counterattacks using this Champion's default skill.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "716",
        "DEF": "1 542",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 35%`,
};
