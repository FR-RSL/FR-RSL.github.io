const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mask of Dread",
          description: `Attacks all enemies. Has a 25% chance of placing a 30% [Decrease SPD] debuff for 2 turns.<br><br>Also fills this Champion’s Turn Meter by 15%.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soul Shepherd",
          description: `Places a [Revive On Death] buff and a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Uncanny Transfer",
          description: `Swaps HP with an ally. <br><br>If this Champion's HP is equal to or higher than the target's after the swap, fills this Champion's Turn Meter by 40%, places a 30% [Increase SPD] buff on this Champion for 2 turns, and places a [Block Damage] buff on the target ally for 1 turn. If this Champion's HP is lower than the target's after the swap, fills the target's Turn Meter by 40%, places a 30% [Increase SPD] buff on them for 2 turns, and a places a [Block Damage] buff on this Champion for 1 turn. Also places two 15% [Continuous Heal] buffs on this Champion for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gravewalker [P]",
          description: `Fully heals the ally with the lowest HP whenever this Champion is killed. <br><br>Heals all allies by 20% of their MAX HP and fills their Turn Meters by 15% whenever this Champion is revived.<br><br>Heal Multiplier: 1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "969",
        "DEF": "1 343",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 24%`,
};
