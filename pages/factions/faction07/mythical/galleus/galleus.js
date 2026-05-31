const championForms = {
  form1: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Wing Clip",
          description: `Attacks 1 enemy. Places a 30% [Decrease SPD] debuff for 2 turns. <br><br>When counterattacking, the damage inflicted by this skill is based on this Champion’s DEF and the enemy’s MAX HP.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cutting Jibe",
          description: `Attacks all enemies. <br><br>Places a [Provoke] debuff for 1 turn. If the target is a Boss, places a [Provoke] debuff for 2 turns instead. <br><br>Also places an [Unkillable] buff on this Champion for 1 turn and a [Counterattack] buff on them for 2 turns.`,
          damage: "4.7*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bloodcrest's Call",
          description: `Fully restores all allies' destroyed MAX HP. <br><br>Also places a [Revive On Death] buff and a 60% [Increase DEF] buff on all allies for 2 turns.<br><br>Then, grants an Extra Turn.`,
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
          name: "Rule the Roost [P]",
          description: `Reflects 50% of the damage this Champion receives back to the attacker. <br><br>If the attacker is a Boss, reflects 100% of the damage this Champion receives.<br><br>Also heals this Champion by 50% of the damage received.<br><br>Heal Multiplier: 0.5*Damage Dealt`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 140",
        "ATQ": "881",
        "DEF": "1 498",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Increases Ally DEF in All Battles by 35%`,
  },
  },
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Fulminous Screech",
          description: `Attacks 1 enemy. Places an extra hit on all enemies under [Decrease DEF] debuffs.`,
          damage: "4*DEFMultiplier: 3*DEF",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Sundered Sky",
          description: `Attacks all enemies. <br><br>Before attacking, places a 60% [Decrease DEF] debuff for 2 turns. This effect cannot be resisted.<br><br>Damage increases by 10% for each enemy under a [Decrease DEF] debuff. Also steals 20% of the Turn Meter from each enemy.`,
          damage: "4.5*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Sonic Torture",
          description: `Attacks all enemies. <br><br>Will ignore 20% of each target’s DEF if they have no buffs.<br>Ignores [Block Damage] buffs.<br><br>Damage increases by 15% for each buff on each target. <br><br>Decreases the duration of all enemy buffs by 2 turns.`,
          damage: "4.7*DEF*(1+0.15*Active Target Buffs)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
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
          name: "Unholy Experiment [P]",
          description: `Immune to [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], [Sheep], and [Petrification] debuffs.<br><br>Also randomly resets the cooldown of one of this Champion’s skills whenever they kill an enemy. Occurs once per skill.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 140",
        "ATQ": "881",
        "DEF": "1 498",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Increases Ally DEF in All Battles by 35%`,
  },
  },
};
