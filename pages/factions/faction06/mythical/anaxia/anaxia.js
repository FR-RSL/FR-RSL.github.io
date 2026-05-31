const championForms = {
  form1: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Thirsting Sword",
          description: `Attacks 1 enemy.<br><br>Heals all allies by 5% of their MAX HP. Heals all allies by an additional 5% of their MAX HP if this Champion attacks a target under a [Leech] debuff.`,
          damage: "4*DEF",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Deathplunge",
          description: `Attacks all enemies.<br><br>Heals all allies by 15% of this Champion’s MAX HP. The value of the heal increases by 5% for each [Leech] debuff on the enemy team.<br><br>If a Champion receives any surplus heal, places a [Shield] buff on that Champion for 2 turns. The value of the [Shield] is equal to the amount of surplus heal received, up to 30% of the Champion’s MAX HP.`,
          damage: "3.7*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Heal +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "All-Consuming Roar",
          description: `Attacks all enemies.<br><br>Places a [Leech] debuff for 2 turns and a [Provoke] debuff for 1 turn on all enemies.<br><br>Also places a [Counterattack] buff on this Champion for 2 turns.`,
          damage: "4*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore resistance +20%"],
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
          name: "Battle Revelry [P]",
          description: `Each time this Champion hits an enemy under a [Leech] debuff, increases this Champion’s DEF and HP by 5% (stacks up to 50%).<br><br>When attacked by enemies whose ATK is higher than or equal to their DEF, has a 100% chance to place a 50% [Decrease ATK] debuff for 2 turns. When attacked by enemies whose DEF is higher than their ATK, has a 100% chance to place a 60% [Decrease DEF] debuff for 2 turns instead.<br><br>When attacked by enemies under a [Leech] debuff, has a 50% chance to place a [Provoke] debuff for 1 turn.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 145",
        "ATQ": "936",
        "DEF": "1 575",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Increases Ally DEF in all Battles by 35%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Blade Axel",
          description: `Attacks 1 enemy.<br><br>Places a [Block Buffs] debuff for 2 turns. This debuff cannot be resisted if the target’s HP is lower than this Champion’s.`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Frenzied Execution",
          description: `Attacks 1 enemy.<br><br>Will ignore [Stone Skin] buffs. The damage inflicted by this skill increases by 50% if the target's HP is lower than this Champion's.<br><br>Resets the cooldown of this skill if the target is killed.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Soul Separator",
          description: `Attacks 1 enemy. Before attacking, places a 30% [Increase C.DMG] buff on all allies for 2 turns.<br><br>Steals 50% of the target’s Turn Meter. Steals 100% Turn Meter instead if the target’s HP is lower than this Champion’s.<br><br>Destroys the target’s HP by 25%. Destroys 50% HP if the target’s HP is lower than this Champion’s.`,
          damage: "0.28*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore resistance +20%"],
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
          name: "Rage Nexus [P]",
          description: `Will ignore 15% of a target’s DEF if the target’s HP is lower than this Champion’s. Will also ignore 15% of the target’s DEF if the target is under a [Leech] debuff.<br><br>Every third skill this Champion uses will attack all enemies instead.<br><br>This Champion joins every third attacking skill used by allies. This Champion will use their default skill when joining in that skill.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "26 430",
        "ATQ": "793",
        "DEF": "1 299",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Increases Ally DEF in all Battles by 35%`,
  },
  },
};
