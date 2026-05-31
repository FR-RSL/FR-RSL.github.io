const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Mesmeric Fangs",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit decreases the target’s Turn Meter by 5%. Each hit decreases the target’s Turn Meter by an additional 5% if the target is under any debuffs placed by this Champion.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Moon-Spider Maw",
          description: `Attacks all enemies.<br><br>Decreases the Turn Meters of all enemies by 50%. Decreases the Turn Meters of all enemies by 100% instead if this skill is used on an Extra Turn or Instant Turn.<br><br>Places a [True Fear] debuff for 1 turn. Places a [True Fear] debuff for 2 turns instead against enemies whose Turn Meter is fully decreased by this skill and Bosses.`,
          damage: "5.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dark Trance",
          description: `Removes all buffs from all enemies.<br><br>Places a 60% [Decrease DEF] debuff and a [Block Active Skills] debuff on all enemies for 2 turns.<br><br>Grants an Extra Turn if 8 or more debuffs were placed by this skill.`,
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
          name: "Spiderscuttle [P]",
          description: `Increases this Champion’s SPD by 4 for each debuff placed by this Champion and by 2 for each debuff resisted when this Champion attempts to place debuffs (stacks up to 100). Only counts debuffs placed by this Champion’s skills.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 635",
        "ATQ": "881",
        "DEF": "1 465",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in all Battle by 80.`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Astral Ravage",
          description: `Attacks 1 enemy 2 times.<br><br>Fills this Champion’s Turn Meter by 5% for each critical hit. Fills this Champion’s Turn Meter by additional 5% for each critical hit, if the target is under a [Block Active Skills] debuff or a [Decrease DEF] debuff.<br><br>If this attack kills an enemy, grants an Extra Turn instead.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Deaththread Spin",
          description: `Attacks 1 enemy 3 times. Will always use this skill instead of the default skill when counterattacking. This skill cannot be blocked by [Block Active Skills] debuffs.<br><br>Will ignore [Shield] and [Block Damage] buffs. Additionally ignores [Unkillable] buffs if the target is under a [Block Active Skills] debuff or a [Decrease DEF] debuff.<br><br>Fills this Champion’s Turn Meter by 15% for each critical hit.`,
          damage: "1.7*ATK+0.05*TRG_HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Gossamer Execution",
          description: `Attacks 1 enemy 4 times.<br><br>Each hit will ignore 15% of the target's DEF. Each hit will ignore 30% DEF instead if the target is under a [Block Active Skills] debuff or a [Decrease DEF] debuff.<br><br>Fills this Champion’s Turn Meter by 20% for each critical hit.<br><br>Then places a [Perfect Veil] buff on this Champion for 2 turns.`,
          damage: "1.9*ATK",
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
          name: "Great Web Mistress [P]",
          description: `This Champion is immune to [Stun], [Sleep], [Fear], [True Fear], [Provoke], [Freeze], and [Petrification] debuffs while under a [Veil] or [Perfect Veil] buff.<br><br>This Champion also cannot receive critical hits while under a [Veil] or [Perfect Veil] buff.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "18 825",
        "ATQ": "1 498",
        "DEF": "1 101",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in all Battle by 80.`,
  },
  },
};
