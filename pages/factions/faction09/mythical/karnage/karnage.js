const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Sufferslash",
          description: `Attacks 1 enemy 2 times. Has a 50% chance of removing 1 random buff from the target. <br><br>[Passive Effect]<br><br>Whenever an enemy hits this Champion or an ally, has a 50% chance to counterattack with this skill. This chance increases by 10% for each debuff on the enemy.`,
          damage: "2.3*(ATK+ACC)",
          levelInfo: ["Level 2: Damage +15%", "Level 3: Ignore RES +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Devilish Accord",
          description: `Attacks 1 enemy 2 times. <br><br>Before attacking, swaps HP with an enemy, then steals all buffs from them. Also transfers all debuffs from this Champion to the target, and places a [Seal] debuff on the target for 2 turns. This debuff cannot be removed. <br><br>This debuff cannot be resisted or blocked if the target has 50% HP or less.`,
          damage: "3.5*(ATK+ACC)",
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Trinity of Pain",
          description: `Attacks 1 enemy 3 times. The first hit places a [Block Passive Skills] debuff for 2 turns. This debuff cannot be removed. <br><br>The second hit places a [Block Active Skills] debuff for 2 turns. This debuff cannot be removed. <br><br>The third hit steals 100% of the target’s Turn Meter.`,
          damage: "2.7*(ATK+ACC)",
          cooldown: 3,
          levelInfo: ["Level 2: Ignore RES +15%", "Level 3: Ignore RES +15%"],
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
          name: "Avatar of Anarchy [P]",
          description: `Each hit this Champion deals from skills has a 50% chance of applying a [Debuff Spread] effect, taking 1 random debuff from the target and placing it on all enemies.<br><br>Whenever this Champion kills an enemy, has a 100% chance of applying a [Debuff Spread] effect, taking all debuffs from the target and placing them on all enemies. This effect cannot be resisted.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 155",
        "ATQ": "1 476",
        "DEF": "1 101",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in Arena by 33%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Demon Stinger",
          description: `Attacks 1 enemy 2 times. Heals this Champion by 20% of the damage inflicted. <br><br>[Passive Effect]<br><br>Whenever an enemy hits this Champion or an ally, has a 50% chance to counterattack with this skill. This chance increases by 10% for each debuff on the enemy.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "1.8*(ATK+ACC)",
          levelInfo: ["Level 2: Damage +15%", "Level 3: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Singularity of Pain",
          description: `Attack all enemies. Will ignore [Shield] buffs. <br><br>Will also ignore [Ally Protection] buffs when attacking enemies under 1 or more debuffs, and [Unkillable] buffs when attacking enemies under 2 or more debuffs.`,
          damage: "4*(ATK+ACC)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Infernal Stars",
          description: `Attacks all enemies 2 times. <br><br>If a target is killed by this skill while under 3 or more different debuffs, places a [Block Revive] debuff on them. <br><br>Also heals this Champion by 30% of the damage dealt.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "2.5*(ATK+ACC)",
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
          name: "Unending Karnage [P]",
          description: `This Champion’s C. DMG increases by 1% for every 3 points of ACC they have. <br><br>Ignores 10% of the target’s DEF for each debuff they are under.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "14 370",
        "ATQ": "1 960",
        "DEF": "936",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in Arena by 33%`,
  },
  },
};
