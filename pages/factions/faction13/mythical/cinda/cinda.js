const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Eruptive Blow",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit ignores 15% of the target's DEF. Ignores 30% of the target’s DEF instead if this Champion is under a [Magma Shield] buff.<br><br>Will attack all remaining enemies with any surplus damage if the initial target is killed.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: +20% Damage"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Breaker Of Metals",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit ignores 25% of the target’s DEF. Ignores 50% of the target’s DEF instead if this Champion is under a [Magma Shield] buff. Will also deal double damage if the target is under a [Shield] buff.<br><br>Fills this Champion’s Turn Meter by 50% and places a [Magma Shield] buff equal to 200% of this Champion's ATK on this Champion for 1 turn.`,
          damage: "2.6*ATK ×2",
          cooldown: 4,
          levelInfo: ["Level 2: +20% Damage", "Level 3: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "In Magma Clad",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit ignores 35% of the target's DEF. Will also deal double damage and ignore [Unkillable] and [Block Damage] buffs if this Champion is under a [Magma Shield] buff.<br><br>Places a [Magma Shield] buff equal to 300% of this Champion's ATK on all allies for 2 turns and grants this Champion an Extra Turn if this attack kills the target.`,
          damage: "2.45*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: +20% Damage"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Alternate Form.<br><br>Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Furnace-Shell [P]",
          description: `At the start of each Round and whenever this Champion is revived, places a [Magma Shield] buff equal to 300% of this Champion's ATK on this Champion for 1 turn.<br><br>This Champion receives 30% less damage from enemies when under a [Magma Shield] buff. Heals this Champion by 50% of their MAX HP whenever a [Magma Shield] buff on them expires or is removed by damage.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 175",
        "ATQ": "1 707",
        "DEF": "1 002",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in all Battles by 35%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Hammerflame",
          description: `Attacks 1 enemy. Will ignore 10% of the target’s DEF. Will ignore an additional 5% of the target’s DEF for each active [HP Burn] debuff on the enemy team (stacks up to 35% total Ignore DEF).<br><br>Places a 50% [Decrease ATK] debuff on the target for 2 turns.<br><br>Attacks all enemies instead if this Champion is under a [Magma Shield] buff. Will ignore 10% of each target’s DEF. Will ignore an additional 5% of each target’s DEF for each active [HP Burn] debuff on the enemy team (stacks up to 35% total Ignore DEF).<br><br>Places a 50% [Decrease ATK] debuff on all enemies for 2 turns.`,
          damage: "2.4*ATK AoE",
          levelInfo: ["Level 2: +20% Damage", "Level 3: +20% Ignore RES"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Burning Tempest",
          description: `Attacks all enemies 2 times.<br><br>Each hit decreases each target’s DEF by 3% (stacks up to 30%). Each hit also deals additional pure damage to each target equal to 2% of their MAX HP for each turn remaining on all [HP Burn] debuffs on all enemies (stacks up to 15%). This additional pure damage is always normal and will ignore 100% of each target’s DEF. Cannot exceed 3% of Boss and minion MAX HP. Does not count as a hit.`,
          damage: "2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: +20% Damage"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Total Incineration",
          description: `Attacks all enemies. Before attacking, places a [HP Burn] debuff on all enemies for 3 turns and instantly activates one tick of all [HP Burn] debuffs on all enemies. Will ignore 25% of each target’s DEF. Will ignore an additional 5% for each active [HP Burn] debuff on the enemy team (stacks up to 50% total Ignore DEF).<br><br>Places a 60% [Decrease DEF] debuff on all enemies for 2 turns.`,
          damage: "3.5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: +20% Damage", "Level 3: +20% Ignore RES"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Base Form.<br><br>Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Fire Incarnate [P]",
          description: `[Active Effect]<br><br>When hit by an enemy under a [HP Burn] debuff, places a [Magma Shield] buff equal to 300% of this Champion’s ATK on this Champion for 1 turn.<br><br>[Passive Effect]<br><br>The damage enemies receive from [HP Burn] debuffs will ignore [Block Damage] and [Unkillable] buffs.<br><br>This Champion & their allies deal 15% more damage against enemies under [HP Burn] debuffs. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 1,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 175",
        "ATQ": "1 707",
        "DEF": "1 002",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in all Battles by 35%`,
  },
  },
};
