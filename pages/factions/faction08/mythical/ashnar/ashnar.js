const championForms = {
  form1: {
    type: "PV",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Ignition Arc",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit has a 50% chance of increasing the duration of all debuffs on the target by 1 turn.<br><br>Each hit has a 100% chance to increase the duration of a [HP Burn] debuff on the target by 1 turn instead, if the initial chance does not activate.`,
          damage: "0.09*HP",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pyroclast Storm",
          description: `Attacks all enemies. <br><br>Instantly activates one tick of all [HP Burn] debuffs on all enemies and allies. <br><br>Whenever a [HP Burn] debuff is activated on an enemy by this skill, decreases their RES by 10 (stacks up to 100). Whenever a [HP Burn] debuff is activated on an ally by this skill, increases their RES by 10 (stacks up to 100). <br><br>Also fills the Turn Meters of all allies by 5% for each [HP Burn] debuff activated on enemies.`,
          damage: "0.26*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wreathed in Flame",
          description: `Places a 25% [Weaken] debuff and a [HP Burn] debuff on all enemies for 2 turns. <br><br>Also places a [HP Burn] debuff on all allies for 2 turns. This debuff cannot be blocked or resisted.<br><br>Then fills the Turn Meters of all allies by 30%.`,
          cooldown: 3,
          levelInfo: ["Level 2: Ignore RES +20%"],
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
          name: "By Fire Be Healed [P]",
          description: `Each [HP Burn] debuff placed by this Champion while in their Base Form increases their MAX HP and DEF by 5% (stacks up to 25% across both Forms and will not reset).<br><br>[HP Burn] debuffs placed on allies heal them instead of damaging them.<br><br>Allies deal 3% more damage for each active [HP Burn] debuff. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>Heal Multiplier: 0.03*Target Max HP`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 130",
        "ATQ": "1 013",
        "DEF": "1 299",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Thunderstar",
          description: `Attacks 1 enemy 2 times. Has a 25% chance of repeating each hit.<br><br>Each hit also places a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.9*DEF",
          levelInfo: ["Level 2: Buff/Debuff Chance +15%", "Level 3: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Magma Geyser",
          description: `Attacks 1 enemy. <br><br>Applies a [Debuff Spread] effect, taking all debuffs from the target and placing them on all enemies.<br><br>Then, repeats the attack on all enemies. Increases the duration of all debuffs on all enemies by 1 turn.<br><br>Both attacks will ignore 20% of each target's DEF.`,
          damage: "4.9*DEFMultiplier: 3.7*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Cataclysm Smash",
          description: `Attacks all enemies. Before attacking, places a 60% [Increase DEF] buff and a 30% [Increase C. DMG] buff on all allies for 2 turns. <br><br>Places a [Provoke] debuff for 1 turn. If the target of this skill is a Boss, places a [Provoke] debuff for 2 turns instead. <br><br>This attack cannot be a weak hit when hitting enemies under a [HP Burn] debuff.`,
          damage: "4.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +20%", "Level 4: Cooldown -1"],
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
          name: "By Fire Be Broken [P]",
          description: `Each [HP Burn] debuff placed by this Champion's Base Form increases this Champion's MAX HP and DEF by 5% (stacks up to 25% across both Forms and will not reset).<br><br>All of this Champion's skills will ignore 20% of the enemy's DEF if they are under a [HP Burn] debuff.<br><br>[HP Burn] debuffs placed on allies heal them instead of damaging them.<br><br>Heal Multiplier: 0.03*Target Max HP`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 650",
        "ATQ": "947",
        "DEF": "1 597",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
};
