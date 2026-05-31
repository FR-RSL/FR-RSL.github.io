const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Heartburst",
          description: `Attacks all enemies. <br><br>Places a 60% [Decrease DEF] debuff for 2 turns. <br><br>Also fills the Turn Meters of all allies by 5%.`,
          damage: "2.77*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Off With Their Heads!",
          description: `Removes all buffs from all enemies. Then places a [Deathbrand] debuff on the initial target for 2 turns. Also places a [True Fear] debuff on all enemies for 1 turn. <br><br>Fills this Champion’s Turn Meter by 5% for each buff removed by this skill.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Queenly Command",
          description: `Teams up with all allies to attack a single enemy. Before attacking, places a 50% [Increase ATK] buff on all allies for 2 turns. <br><br>Decreases the cooldown of this Champion's Off With Their Heads! skill by 2 turns if the target is killed.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hail To The Queen [P]",
          description: `For every 10 buffs the enemy team receives, grants this Champion an Extra Turn.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 189",
        "DEF": "1 200",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 70`,
};
