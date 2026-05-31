const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Swordspear Slash",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of increasing the duration of all debuffs on the target by 1 turn.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Doom Lantern",
          description: `Places a 50% [Decrease RES] debuff and a [Block Buffs] debuff on all enemies for 2 turns. <br><br>Also decreases each target’s Turn Meter by 20%.`,
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Deathly Apparition",
          description: `Attacks all enemies. Removes all buffs from all enemies.<br>Also increases the cooldowns of all enemy skills by 3 turns.`,
          damage: "4*ATK",
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
          name: "Shadowvigil [P]",
          description: `Immune to [Stun] debuffs. Increases this Champion’s ACC by 1 for every 2 RES they have.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 970",
        "ATQ": "1 189",
        "DEF": "1 266",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Increases Ally RES in All Battles by 80`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Bladewing",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of decreasing the duration of all debuffs on a random ally by 1 turn.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Rain of Damnation",
          description: `Attacks all enemies. Places a [Block Debuffs] buff and a 50% [Increase RES] buff on all allies for 2 turns. <br><br>Then, fills the Turn Meters of all allies by 20%.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Nightpurge",
          description: `Removes all debuffs from all allies, then decreases the cooldown of all ally skills, except this Champion's, by 3 turns. This skill's cooldown cannot be reduced or reset.`,
          cooldown: 6,
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
          name: "Queen of the Dark [P]",
          description: `Immune to [Sleep] debuffs. Increases this Champion’s SPD by 1 for every 10 RES they have (stacks up to 50).`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 970",
        "ATQ": "1 189",
        "DEF": "1 266",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Increases Ally RES in All Battles by 80`,
  },
  },
};
