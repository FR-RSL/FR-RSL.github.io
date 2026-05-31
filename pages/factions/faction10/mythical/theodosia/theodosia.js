const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Serpentia's Storm",
          description: `Attacks 1 enemy. <br><br>Heals all allies by 5% of this Champion’s MAX HP. <br><br>Fills this Champion’s Turn Meter by 5% per each alive ally, and by an additional 2.5% per each alive enemy.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "0.27*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Deranged Fortitude",
          description: `Removes all debuffs from all allies, then places a [Perfect Veil] buff on all allies, except this Champion, for 2 turns. <br><br>Places a [Stone Skin] buff on this Champion for 1 turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unnatural Regeneration",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter. <br><br>Places an [Unkillable] buff on all allies for 2 turns.`,
          cooldown: 6,
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
          name: "Heinous Protection [P]",
          description: `Every 7 turns, equalizes the HP of all allies. The HP levels of all allies will be brought to the average HP level of the team.<br><br>Allies will receive 1% less damage for every 2% of HP lost (stacks up to 25%). If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 470",
        "ATQ": "925",
        "DEF": "1 432",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in All Battles by 25%`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "I Will Find You...",
          description: `Attacks 1 enemy. <br><br>Destroys the target’s SPD by 3 (stacks up to 30). <br><br>Decreases the target’s Turn Meter by 5% per each alive ally, and by an additional 2.5% per each alive enemy.`,
          damage: "0.29*HP",
          levelInfo: ["Level 2: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Baleful Onslaught",
          description: `Attacks all enemies. Before attacking, steals all buffs from all enemies. <br><br>Places a [Block Buffs] debuff and a 60% [Decrease DEF] debuff for 2 turns on all enemies. If an enemy’s SPD is lower than this Champion’s SPD, these debuffs will be protected.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Somnolent Whisper",
          description: `Places a [Sleep] debuff for 1 turn and a 30% [Decrease SPD] debuff for 2 turns on all enemies. If an enemy’s SPD is lower than this Champion’s SPD, the [Decrease SPD] debuff will be protected. <br><br>Then decreases the Turn Meters of all enemies by 25%.`,
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
          name: "They Are Beneath Me [P]",
          description: `This Champion is immune to [Block Active Skills] debuffs.<br><br>When allies attack, their damage is increased by 25% of their target's current Turn Meter. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 470",
        "ATQ": "925",
        "DEF": "1 432",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in All Battles by 25%`,
  },
  },
};
