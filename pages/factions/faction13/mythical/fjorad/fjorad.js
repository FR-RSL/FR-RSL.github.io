const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Bite of the Wolf",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of placing a [Freeze] debuff for 1 turn. This debuff cannot be blocked or resisted if the target Champion is from the Gaellen Pact.<br><br>If the target is not under a [Freeze] debuff, will repeat the attack once.`,
          damage: "2.6*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Great Captain",
          description: `Places a [Block Debuffs] buff and a 30% [Increase SPD] buff on all allies for 2 turns. <br><br>Decreases the cooldown of all ally skills, except this Champion’s, by 1 turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wolfheart's Rage",
          description: `Attacks all enemies. <br><br>Places a [Freeze] debuff on all enemies for 1 turn, and a 30% [Decrease SPD] debuff on all enemies for 2 turns. If an enemy is from the Gaellen Pact, places a [Freeze] debuff on them for 2 turns instead and this debuff cannot be blocked or resisted.<br><br>Also decreases the target's Turn Meter by 30%. If the enemy is from the Gaellen Pact, decreases their Turn Meter by 50% instead.<br><br>Grants an Extra Turn.`,
          damage: "5.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
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
          name: "Best Served Cold [P]",
          description: `Whenever this Champion or an ally receives a debuff from an enemy, has a 30% chance of placing a [Freeze] debuff on that enemy for 1 turn.<br><br>This chance increases to 100% and the debuff cannot be blocked or resisted if the target is from the Gaellen Pact.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 635",
        "ATQ": "1 068",
        "DEF": "1 277",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in All Battles by 80`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Rimecleave",
          description: `Attacks 1 enemy.<br><br>Will ignore 15% of the target's DEF. If the target is under a [Freeze] debuff, ignores 35% of the target's DEF instead.<br><br>If this attack kills an enemy, resets the cooldown of one of this Champion's random skills.`,
          damage: "0.28*HP",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Icequake",
          description: `Attacks all enemies. Places an extra hit on enemies under [Freeze], [Stun], [Fear], [True Fear], [Provoke], or [Petrification] debuffs. <br><br>Each hit decreases each target’s MAX HP by 25% of the damage inflicted (stacks up to 50%). <br><br>Each hit also decreases each target’s Turn Meter by 25%. This effect cannot be resisted if an enemy is under [Freeze], [Stun], [Fear], [True Fear], [Provoke], or [Petrification] debuffs.`,
          damage: "0.3*HPMultiplier: 0.28*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Disciple of Tormin",
          description: `Attacks 1 enemy. <br><br>Will ignore 50% of the target's DEF. If the target is under a [Freeze] debuff, will ignore 100% of the target's DEF and [Block Damage] buffs instead. <br><br>If the target is killed while under a [Freeze] debuff, also places a [Block Revive] debuff on them, and places a [Freeze] debuff on all enemies for 1 turn.<br><br>The [Freeze] debuff cannot be blocked or resisted by enemies from the Gaellen Pact.`,
          damage: "0.37*HP",
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
          name: "Frosty Resolve [P]",
          description: `Counterattacks with the Rimecleave skill whenever an enemy increases the cooldown of any of this Champion's skills.<br><br>Whenever an ally is killed, has a 50% chance of placing a [Freeze] debuff on all enemies for 1 turn. This chance increases to 100% and cannot be blocked or resisted by enemies from the Gaellen Pact.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 635",
        "ATQ": "925",
        "DEF": "1 421",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in All Battles by 80`,
  },
  },
};
