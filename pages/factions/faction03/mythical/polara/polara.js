const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Burning Zeal",
          description: `Attacks 1 enemy. Places an extra hit if the target is under any debuffs. <br><br>Has a 25% chance of granting an Extra Turn.`,
          damage: "4*DEF+1.2*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Faithful Conflagration",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit will ignore 25% of the target’s DEF. Each hit will ignore 50% of the target’s DEF instead, if the target is under a [HP Burn] debuff or a [Freeze] debuff. <br><br>Each hit also destroys the target's DEF and RES by 3% (stacks up to 30%). <br><br>Places a [HP Burn] debuff on all enemies for 2 turns, if the target is killed by this skill. This debuff cannot be resisted.`,
          damage: "1.8*DEF+1.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pyro Maxima",
          description: `Attacks all enemies. This attack deals single-target damage to each target individually, rather than AoE damage. Will ignore [Shield], [Block Damage], and [Unkillable] buffs. <br><br>Instantly activates any [HP Burn] debuffs on all enemies. <br><br>Places a [Block Revive] debuff on targets that are killed while under a [HP Burn] debuff or a [Freeze] debuff.`,
          damage: "4*DEF+1.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
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
          name: "Elemental Mistress [P]",
          description: `This Champion deals 25% more damage against enemies under a [HP Burn] debuff or a [Freeze] debuff. This Champion deals 100% more damage against enemies under both [HP Burn] and [Freeze] debuffs. <br><br>This Champion ignores the damage reduction granted by [Freeze] debuffs.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "15 195",
        "ATQ": "1 509",
        "DEF": "1 332",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in Arena by 40%`,
  },
  },
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Glacial Carve",
          description: `Attacks 1 enemy. <br><br>Places a 50% [Ally Protection] buff on a random ally, except this Champion, for 2 turns. If the randomly selected ally is already under an [Ally Protection] buff, places it on another randomly selected ally. <br><br>Heals this Champion and any allies under [Ally Protection] buffs. The value of the heal is proportional to this Champion’s DEF.<br><br><br>Heal Multiplier: 1*DEF`,
          damage: "3*DEF+0.8*ATK",
          levelInfo: ["Level 2: Damage +20%", "Level 3: Heal +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Frozen Tendrils",
          description: `Places a [Block Debuffs] buff and a 25% [Strengthen] buff on all allies for 2 turns. <br><br>Places a 100% [Ensnare] debuff on all enemies for 2 turns. This debuff cannot be resisted by enemies under a [HP Burn] debuff or a [Freeze] debuff.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Iceblade Tempest",
          description: `Attacks all enemies. Before attacking, places 1 [Intercept] stack on all allies. <br><br>Places a [Freeze] debuff on all enemies for 1 turn. This debuff cannot be resisted.`,
          damage: "3*DEF+0.8*ATK",
          cooldown: 4,
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
          name: "Cryomantic Revival [P]",
          description: `[Passive Effect]<br><br>Allies under a [Freeze] debuff receive 90% less damage. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>[Active Effect]<br><br>Once per Round, revives each ally, including this Champion, with 100% HP. Places a [Freeze] debuff on the revived ally for 1 turn. This debuff cannot be resisted or blocked.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 835",
        "ATQ": "1 123",
        "DEF": "1 542",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in Arena by 40%`,
  },
  },
};
