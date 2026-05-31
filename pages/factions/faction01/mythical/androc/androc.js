const championForms = {
  form1: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Pride's Bite",
          description: `Attacks 1 enemy. Places a 60% [Increase DEF] buff on all allies for 1 turn.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Radiant Claw",
          description: `Attacks all enemies. Increases the duration of all ally buffs by 1 turn. Also heals all allies by 4% of their MAX HP for every buff on them that had its duration increased.<br><br><br>Heal Multiplier: 0.04*Target Max HP*increasedTurnsCountByRelation`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rock of Werinbur",
          description: `Places a 50% [Increase RES] buff, a 25% [Strengthen] buff, and a 15% [Continuous Heal] buff on all allies for 2 turns. Places an additional 15% [Continuous Heal] buff on all allies with less than 50% HP for 2 turns. Also fills the Turn Meter of all allies by 15%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Alternate Form. Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Knights of the Wild [P]",
          description: `Increases each ally's RES by 10 for each buff on all allies. Critical hits inflicted by allies fill the Turn Meters of all allies by 5%. Occurs once per skill. If there are multiple Champions on the team with this skill, only one will activate.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 640",
        "ATQ": "859",
        "DEF": "1 619",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Increases Ally DEF in all Battles by 35%`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Gildthorn Assault",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Decrease DEF] debuff on all enemies for 1 turn.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Palisade Breaker",
          description: `Attacks all enemies. Places a 50% [Decrease RES] debuff, a 25% [Weaken] debuff, and an [Enfeeble] debuff on all enemies for 2 turns. If enemies have 50% HP or less, the [Enfeeble] debuff cannot be removed. Also decreases the Turn Meter of all enemies by 15%.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Roar of Kitherus",
          description: `Attacks all enemies. Before attacking, removes all buffs from all enemies and places a [Block Buffs] debuff on all enemies without buffs for 2 turns. If the target is a Boss, the damage inflicted is equal to 10% of their MAX HP.`,
          damage: "0.1*Target Max HP",
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Base Form. Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Lionheart [P]",
          description: `Increases each ally's ACC by 10 for each buff on all enemies. Each critical hit inflicted by allies decreases the Turn Meters of all enemies by 5%. If there are multiple Champions on the team with this skill, only one will activate.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 955",
        "ATQ": "859",
        "DEF": "1 398",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Increases Ally DEF in all Battles by 35%`,
  },
  },
};
