const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Sacred Lance",
          description: `Attacks 1 enemy. Heals all allies. The value of the heal is proportional to their RES and 5% of their MAX HP. Has a 35% chance of applying a [Buff Spread] effect, taking 1 random buff from each ally and placing it on all allies.`,
          damage: "ATK*(6+RES/1000)",
          levelInfo: ["Level 2: Heal +20%", "Level 3: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Symbol of Hope",
          description: `Removes all debuffs from all allies. Then places a 50% [Increase ATK] buff and a 50% [Increase RES] buff on all allies for 3 turns. Also fills the Turn Meters of all allies by 15%.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Faith Restored",
          description: `Revives a single ally with 75% HP, and places an [Unkillable] buff on that ally for 2 turns. Then activates an [Instant Turn] effect on the revived ally.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
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
          name: "Eternally Adored [P]",
          description: `[Passive Effect]<br>Increases all allies’ damage against enemies whose RES is lower than theirs by 15%. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>[Active Effect]<br>Whenever an enemy is revived, instantly activates the Faith Restored skill on a random dead ally. If no allies are dead, instantly activates the Symbol of Hope skill instead. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 635",
        "ATQ": "958",
        "DEF": "1 387",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Increases Ally RES in all battles by 80`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Radiant Blades",
          description: `Attacks all enemies. This attack deals single-target damage to each target individually, rather than AoE damage. Whenever this Champion counterattacks, increases the Ignore DEF effect of this skill by 5% (stacks up to 25%).<br><br>[Passive Effect]<br>Deals double damage when counterattacking.`,
          damage: "ATK*(2.9+RES/1000)",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Pierced By Light",
          description: `Attacks all enemies. Before attacking, steals 25% of each enemy’s Turn Meter. This effect cannot be resisted. The damage inflicted by this skill increases by 35% against enemies whose RES is lower than this Champion’s. Then places a [Block Damage] buff on this Champion for 2 turns.`,
          damage: "ATK*(4.4+RES/1000)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Seraphic Swoop",
          description: `Attacks 1 enemy 3 times. Will ignore [Shield], [Block Damage], and [Unkillable] buffs. Will also ignore 35% DEF against targets whose RES is lower than this Champion’s.<br><br>If the target is killed and has lower RES than this Champion, places a [Block Revive] debuff on them. If the target isn’t killed, grants an Extra Turn instead.`,
          damage: "ATK*(2+RES/1000)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
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
          name: "Lumaya's Glory [P]",
          description: `Decreases the damage this Champion receives from enemies whose RES is lower than this Champion’s by 15%. <br><br>Places on this Champion a protected [Counterattack] buff for 1 turn at the end of their turn.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 320",
        "ATQ": "1 520",
        "DEF": "1 046",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Increases Ally RES in all battles by 80`,
  },
  },
};
