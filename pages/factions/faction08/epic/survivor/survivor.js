const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Smell Weakness",
          description: `Attacks 1 enemy 2 times. Has a 30% chance of placing a [Provoke] debuff on the target for 1 turn if this Champion has no debuffs. <br>Heals by 15% of the damage inflicted if this Champion is under any debuff.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "1.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Endless Sands",
          description: `Attacks all enemies. Decreases the duration of all enemy buffs by 1 turn. Increases the duration of all ally buffs by 1 turn.`,
          damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Born Survivor [P]",
          description: `Places a 50% [Ally Protection] buff on all allies for 2 turns when any ally’s HP drops below 50%. Also places a [Block Damage] buff on this Champion for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "936",
        "DEF": "1 365",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 25%`,
};
