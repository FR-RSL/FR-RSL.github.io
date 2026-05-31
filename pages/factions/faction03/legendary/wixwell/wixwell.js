const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Deadbolt",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 40% chance of placing a [Provoke] debuff for 1 turn. If the target is a Boss, the chance increases to 80%.`,
          damage: "1.5*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempest of Knowledge",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Also increases the duration of all ally buffs by 1 turn. <br><br>Then increases the value of all [Shield]s on all allies. The value of each [Shield] is increased proportional to the total number of buffs which had their duration increased.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Codex Intercipio",
          description: `Places 2 [Intercept] stacks on a target ally.<br><br>Also places a 60% [Increase DEF] buff and a [Shield] buff on all allies for 2 turns. The value of the [Shield] is proportional to this Champion's DEF.<br><br><br>Shield Multiplier: 3*DEF`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Isolated Lunacy [P]",
          description: `At the start of each Round, places a [Counterattack] buff on this Champion for 1 turn. This buff cannot be removed. <br><br>At the end of this Champion’s turn, places a [Counterattack] buff on them for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "771",
        "DEF": "1 498",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 28%`,
};
