const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Song of Steel",
          description: `Attacks 1 enemy. Places an extra hit if the target is under a [Deathbrand] debuff. <br><br>Decreases the target’s HP and DEF by 10% (stacks up to 30%). This effect does not work against Bosses.`,
          damage: "ATK*4",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "White-Hot Rage",
          description: `Attacks 1 enemy. Before attacking, places a [Block Passive Skills] debuff for 1 turn. Will ignore 50% of the target’s DEF, as well as [Block Damage] and [Unkillable] buffs.<br><br>If the initial target is killed, will repeat the attack against all enemies and ignore 25% of each target’s DEF. Will also decrease the cooldown of the Arctic Howl skill by 2 turns if the initial target is killed while under a [Deathbrand] debuff.`,
          damage: "ATK*6",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Arcitc Howl",
          description: `Places a 50% [Increase ATK] buff and a 50% [Increase ACC] buff on all allies for 3 turns. <br><br>Places a [Deathbrand] debuff on all enemies for 2 turns. Then grants an Extra Turn.`,
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
          name: "Will Of The Tundra [P]",
          description: `[Passive Effect] <br><br>Enemies under a [Deathbrand] debuff receive 20% more damage and inflict 20% less damage. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>This Champion is immune to [Freeze], [Stun], and [Provoke] debuffs.<br><br>[Active Effect] <br><br>Whenever this Champion is killed, revives them with 50% HP, 100% Turn Meter, and places a [Block Damage] buff on them for 1 turn.`,
          cooldown: 5,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 505",
        "ATQ": "1 707",
        "DEF": "980",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
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
          name: "Tempest Of Swords",
          description: `Attacks 1 enemy 2 times. Places a [Stun] debuff for 1 turn. <br><br>If this Champion’s MAX HP is equal to or higher than the target’s, this debuff cannot be resisted.`,
          damage: "0.12*HP+1.4*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Goading Roar",
          description: `Places a [Provoke] debuff on all enemies for 1 turn. If the target is a Boss, places a [Provoke] debuff for 2 turns instead. If this Champion’s MAX HP is equal to or higher than the target’s, these debuffs cannot be resisted.<br><br>Places a 25% [Strengthen] buff on all allies for 2 turns. Also places a [Counterattack] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Glacial Rupture",
          description: `Attacks all enemies. Before attacking, places a 60% [Decrease DEF] debuff on all enemies for 2 turns. If this Champion’s MAX HP is equal to or higher than the target’s, this debuff cannot be resisted.<br><br>This attack deals single-target damage to each target individually, rather than AoE damage. Will ignore 30% of each target’s DEF. Places an extra hit on Bosses, and enemies under [Stun] or [Provoke] debuffs. If a target is a Boss, or is under [Stun] or [Provoke] debuffs, will ignore 50% DEF instead.`,
          damage: "0.35*HP+1.4*ATK",
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
          name: "Bear-Heart [P]",
          description: `[Passive Effect] <br><br>Every time a Champion is killed, increases this Champion’s HP and DEF by 20% (stacks up to 100%). Immune to [Freeze], [Stun] and [Provoke] debuffs.<br><br>[Active Effect] <br><br>Whenever an enemy attempts to place a [Freeze], [Stun] or [Provoke] debuff on this Champion, instantly activates the Glacial Rupture skill. This will not put the Glacial Rupture skill on cooldown.`,
          cooldown: 2,
          isPassive: true
        }
      ],
    stats: {
        "PV": "25 605",
        "ATQ": "815",
        "DEF": "1 332",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in All Battles by 80`,
  },
  },
};
