const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Phantom Cobra",
          description: `Attacks 1 enemy. Places a [Shield] buff on the ally with the lowest HP for 2 turns. The value of the [Shield] is proportional to this Champion's ATK.<br><br><br>Shield Multiplier: 4*ATK`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nest of Vipers",
          description: `Attacks all enemies. Before attacking, places a [Block Debuffs] buff on all allies for 2 turns. Also decreases the duration of all buffs on all enemies by 2 turns. <br><br>After attacking, places a [Block Buffs] debuff on all enemies for 2 turns.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "The Rift's Gaze",
          description: `Fills the Turn Meters of all allies by 20%. Also decreases the Turn Meters of all enemies by 20%. <br><br>Then, places a 50% [Increase ATK] buff and a 25% [Strengthen] buff on all allies for 2 turns.`,
          cooldown: 4,
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
          name: "Reality Shift [P]",
          description: `[Passive Effect]<br><br>At the start of this Champion's turn, places a [Perfect Veil] buff and a 50% [Increase ACC] buff on them for 2 turns. Also, this Champion receives 3% less damage for every 750 ATK they have (stacks up to 30%). <br><br>[Active Effect]<br><br>At the end of this Champion's turn, revive a random ally with 50% HP and 50% Turn Meter. Also places a [Perfect Veil] buff on the revived ally for 2 turns.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 980",
        "ATQ": "1 233",
        "DEF": "1 288",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in All Battles by 25%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Lambent Trident",
          description: `Attacks 1 enemy 2 times. <br><br>The first hit increases this Champion’s ATK by 3% (stacks up to 30%). The second hit decreases 3% of the target’s ATK or DEF or destroys 3% of the target’s MAX HP, depending on their Type (stacks up to 30%). <br><br>[This effect does not work against Support Type Champions]`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Destruction Surge",
          description: `Attacks all enemies. Will ignore [Shield] and [Increase DEF] buffs.<br><br>Before attacking, removes all debuffs from this Champion. Increases this attack’s damage by 15% for each debuff removed. <br><br>If no debuffs were removed from this Champion, increases this attack’s damage by 15% for each alive ally instead.`,
          damage: "3.4*ATK+(3.4*ATK*0.15*Living Allies)Multiplier: 3.4*ATK+(3.4*ATK*0.15*Removed Debuffs)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Flame Vulcan",
          description: `Attacks 1 enemy 2 times. Will ignore any [Ally Protection], [Strengthen], and [Shield] buffs, as well as 30% of the target’s DEF.<br><br>Before attacking, steals 50% of the target’s Turn Meter. This effect cannot be resisted.`,
          damage: "2.5*ATK",
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
          name: "Overwhelming Power [P]",
          description: `[Passive Effect]<br><br>At the start of this Champion's turn, places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on them for 2 turns. <br><br>[Active Effect]<br><br>Increases the cooldown of all enemy skills by 2 turns whenever this Champion kills an enemy. <br><br>If this Champion kills two or more enemies in a single attack, this effect will only activate once. This effect cannot be resisted.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 010",
        "ATQ": "1 597",
        "DEF": "1 123",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in All Battles by 25%`,
  },
  },
};
