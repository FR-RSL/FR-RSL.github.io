const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Knee-Smasher",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.7*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Means To An End",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Also places a [Counterattack] buff on this Champion for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bullish Fighter",
          description: `Attacks all enemies. <br><br>Has a 50% chance of placing a [Provoke] debuff for 1 turn. This debuff cannot be resisted, if this Champion's DEF is lower than the target’s. <br><br>Places a 30% [Reflect Damage] buff on all allies for 2 turns.`,
          damage: "4*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Loathed Pariah [P]",
          description: `Whenever an enemy attacks an ally under an [Ally Protection] buff, has a 15% chance of placing a [Provoke] debuff on the attacker for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "749",
        "DEF": "1 387",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 30%`,
};
