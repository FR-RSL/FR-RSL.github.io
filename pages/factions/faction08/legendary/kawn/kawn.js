const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Timbermaker",
          description: `Attacks 1 enemy. Before attacking, removes 1 random buff from the target. This effect cannot be resisted if this Champion is under a [Shield] buff. <br><br>Places a [Block Revive] debuff if this attack kills an enemy. <br><br>Increases the value of any [Shield] buffs on this Champion by 30% of damage dealt. Cannot increase by more than 10,000.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barkbreaker",
          description: `Attacks all enemies. <br><br>Ignores a percentage of each target’s DEF equal to 50% of the difference between this Champion’s MAX HP and any [Shield]s on them. <br><br>Also destroys each target's MAX HP by 20% of the damage inflicted (stacks up to 50%). This effect will ignore any [Shield] buffs.`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hardy Soul",
          description: `Places a [Shield] buff proportional to this Champion's DEF and a 25% [Strengthen] buff on all allies for 2 turns. <br><br>Also places a [Counterattack] buff on this Champion for 2 turns.<br><br><br>Shield Multiplier: 3.5*DEF`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mistwood's Bane [P]",
          description: `Removes 1 random debuff from this Champion at the start of their turn. <br><br>At the start of every 4th turn by this Champion, removes all debuffs from them and places a 60% [Increase DEF] buff on them for 2 turns. <br><br>Increases this Champion's DEF by 3% for each debuff removed by this skill (stacks up to 30%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "881",
        "DEF": "1 465",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 33%`,
};
