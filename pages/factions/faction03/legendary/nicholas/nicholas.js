const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Boreal Blade",
          description: `Attacks 1 enemy. Has a 65% chance of placing a [Freeze] debuff for 1 turn. This debuff cannot be resisted.<br><br>If Lady Noelle is on the same team, the chance increases to 100% and the debuff cannot be blocked or resisted.`,
          damage: "0.28*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Polar Protection",
          description: `Attacks all enemies. Will ignore 30% of each target's DEF if Lady Noelle is on the same team.<br><br>Places a 25% [Strengthen] buff and a [Shield] buff on all allies for 2 turns. The value of the [Shield] is equal to 30% of the damage inflicted.<br><br><br>Shield Multiplier: 0.3*Damage Dealt`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Goodwill",
          description: `Places an [Unkillable] buff and a 15% [Continuous Heal] buff on all allies for 2 turns.<br><br>Also places a [Counterattack] buff on this Champion for 2 turns. <br><br>If Lady Noelle is on the same team, also places a [Taunt] buff on this Champion for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Winter's Garden [P]",
          description: `Enemy Ignore DEF effects used against allies under [Shield] buffs are decreased by 30%. Enemy Ignore DEF effects used against Lady Noelle while she's under a [Shield] buff are decreased by 60%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 800",
        "ATQ": "936",
        "DEF": "1 123",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
