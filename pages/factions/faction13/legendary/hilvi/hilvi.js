const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frostflame Torch",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns.<br><br>If Tormin the Cold is on the same team, has a 25% chance to instantly activate his [Rimefire] skill.`,
          damage: "2.6*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Embittering Cold Level 1",
          description: `Removes all buffs from all enemies, and places a [Freeze] debuff on all enemies for 1 turn.<br><br>If Tormin the Cold is on the same team, instantly activates his Blizzard Rage skill.<br><br>This skill’s cooldown cannot be decreased or reset.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ward Of The Glacier",
          description: `Revives all dead allies with 50% HP and 30% Turn Meter.<br><br>Places a [Block Damage] buff on all allies for 1 turn and a 30% [Increase SPD] buff on all allies for 2 turns. Will place these buffs even if no allies were revived.<br><br>If no allies were revived by this skill, also fills the Turn Meters of all allies by 25%.<br><br>This skill's cooldown cannot be decreased or reset.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Divine Mission [P]",
          description: `Whenever an enemy receives a [Freeze] debuff, this Champion steals 1 random buff from them, places a [HP Burn] debuff on them for 2 turns, and decreases their Turn Meter by 10%.<br><br>If Tormin the Cold is on the same team, fills his Turn Meter by an amount equal to the enemy Turn Meter decreased by this skill. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "826",
        "DEF": "1 387",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all Battles by 19%`,
};
