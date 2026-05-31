const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Magma Hurl",
          description: `Attacks 1 enemy. <br><br>Increases the duration of any [HP Burn] debuffs on the target by 1 turn. If the target is not under a [HP Burn] debuff, decreases the duration of 2 random buffs on that enemy by 1 turn instead. These effects cannot be resisted if this attack is critical. <br><br>Then, attacks all enemies not under [HP Burn] debuffs, except the initial target. Decreases the duration of 2 random buffs on all enemies hit by 1 turn. This effect cannot be resisted if this attack is critical.`,
          damage: "5.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flames of Resentment",
          description: `Attacks all enemies. <br><br>Before attacking, increases the duration of all [HP Burn] debuffs on all enemies by 1 turn, then instantly activates one tick of all [HP Burn] debuffs on all enemies. This effect cannot be resisted if this Champion's C.RATE is 100% or higher. <br><br>Finally, increases the duration of all debuffs on all enemies by 1 turn, and places a 30% [Decrease SPD] debuff on all enemies for 2 turns. These effects cannot be resisted if this attack is critical.`,
          damage: "5.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Let Me At 'Em!",
          description: `Places a 30% [Increase С.DMG] buff, a 30% [Increase C.RATE] buff and a 30% [Increase SPD] buff on all allies for 3 turns. <br><br>Then, grants an Extra Turn.`,
          cooldown: 5,
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
          name: "Spark of Anger [P]",
          description: `Before any Champion takes their turn in a Round, places a [HP Burn] debuff on all enemies for 2 turns. Occurs once per Round. This effect cannot be resisted if this Champion's C.RATE is 100% or higher. <br><br>Also before the start of this Champion's turn, has a 50% chance of placing a [HP Burn] debuff on all enemies for 1 turn. This effect cannot be resisted if this Champion's C.RATE is 100% or higher.`,
          cooldown: 1,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 800",
        "ATQ": "991",
        "DEF": "1 343",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/crit.webp",
    description: `Increases Ally C.RATE in All Battles by 27%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Totemic Vengeance",
          description: `Attacks 1 enemy. If this Champion’s HP or the initial target’s HP is equal to or lower than 50%, attacks all enemies instead.<br><br>Increases the duration of 2 random debuffs on the target by 1 turn. If attacking all enemies, increases the duration of 2 random debuffs on all enemies by 1 turn instead. This effect cannot be resisted if this attack is critical.`,
          damage: "0.14*HP+0.7*DEFMultiplier: 0.2*HP+0.7*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "KABOOM!",
          description: `Attacks all enemies. <br><br>Before attacking, places a 60% [Decrease DEF] debuff on all enemies for 2 turns. This debuff cannot be resisted if the target is under a [HP Burn] debuff. <br><br>Places an extra hit on enemies under [HP Burn] debuffs. <br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "0.23*HP+0.7*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Ungodly Fury",
          description: `Places a [Pain Link] debuff on a target enemy for 2 turns. This debuff cannot be removed, resisted, or blocked. <br><br>When calculating the damage inflicted by the [Pain Link] debuff, 75% of the attacker's skill multiplier is reflected. The damage inflicted by the [Pain Link] debuff will ignore 100% of the target’s DEF. <br><br>Also places a [Taunt] buff and an [Unkillable] buff on this Champion for 2 turns. Finally, places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
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
          name: "Burning Juggernaut [P]",
          description: `Will ignore 15% of a target’s DEF if this Champion’s HP or the target’s HP is equal to or greater than 50%. If this Champion’s HP or the target’s HP is less than 50%, will ignore 25% of the target’s DEF instead. <br><br>Will also ignore [Block Damage] and [Shield] buffs when attacking enemies under [HP Burn] debuffs. <br><br>Inflicts 20% more damage to enemies not under a [HP Burn] debuff.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "24 780",
        "ATQ": "738",
        "DEF": "1 465",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/crit.webp",
    description: `Increases Ally C.RATE in All Battles by 27%`,
  },
  },
};
