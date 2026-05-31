const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Eruptive Blow",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit ignores 15% of the target's DEF. Ignores 30% of the target’s DEF instead if this Champion is under a ${BUFFS.SHIELD_MAGMA} buff.<br><br>Will attack all remaining enemies with any surplus damage if the initial target is killed.`,
          damage: "1.9*ATQ",
          levelInfo: ["+20% Damage"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Breaker Of Metals",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit ignores 25% of the target’s DEF. Ignores 50% of the target’s DEF instead if this Champion is under a ${BUFFS.SHIELD_MAGMA} buff. Will also deal double damage if the target is under a ${BUFFS.SHIELD} buff.<br><br>Fills this Champion’s Turn Meter by 50% and places a ${BUFFS.SHIELD_MAGMA} buff equal to 200% of this Champion's ATQ on this Champion for 1 turn.`,
          damage: "2.6*ATQ ×2",
          cooldown: 4,
          levelInfo: ["+20% Damage", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "In Magma Clad",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit ignores 35% of the target's DEF. Will also deal double damage and ignore ${BUFFS.UNKILLABLE} and ${BUFFS.BLOCK_DAMAGE} buffs if this Champion is under a ${BUFFS.SHIELD_MAGMA} buff.<br><br>Places a ${BUFFS.SHIELD_MAGMA} buff equal to 300% of this Champion's ATQ on all allies for 2 turns and grants this Champion an Extra Turn if this attack kills the target.`,
          damage: "2.45*ATQ",
          cooldown: 4,
          levelInfo: ["+20% Damage"],
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
          description: `At the start of each Round and whenever this Champion is revived, places a ${BUFFS.SHIELD_MAGMA} buff equal to 300% of this Champion's ATQ on this Champion for 1 turn.<br><br>This Champion receives 30% less damage from enemies when under a ${BUFFS.SHIELD_MAGMA} buff. Heals this Champion by 50% of their MAX HP whenever a ${BUFFS.SHIELD_MAGMA} buff on them expires or is removed by damage.`,
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
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Hammerflame",
          description: `Attacks 1 enemy. Will ignore 10% of the target’s DEF. Will ignore an additional 5% of the target’s DEF for each active ${DEBUFFS.BURN} debuff on the enemy team (stacks up to 35% total Ignore DEF).<br><br>Places a 50% ${DEBUFFS.ATK} debuff on the target for 2 turns.<br><br>Attacks all enemies instead if this Champion is under a ${BUFFS.SHIELD_MAGMA} buff. Will ignore 10% of each target’s DEF. Will ignore an additional 5% of each target’s DEF for each active ${DEBUFFS.BURN} debuff on the enemy team (stacks up to 35% total Ignore DEF).<br><br>Places a 50% ${DEBUFFS.ATK} debuff on all enemies for 2 turns.`,
          damage: "2.4*ATQ AoE",
          levelInfo: ["+20% Damage", "+20% Ignorer la RES"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Burning Tempest",
          description: `Attacks all enemies 2 times.<br><br>Each hit decreases each target’s DEF by 3% (stacks up to 30%). Each hit also deals additional pure damage to each target equal to 2% of their MAX HP for each turn remaining on all ${DEBUFFS.BURN} debuffs on all enemies (stacks up to 15%). This additional pure damage is always normal and will ignore 100% of each target’s DEF. Cannot exceed 3% of Boss and minion MAX HP. Does not count as a hit.`,
          damage: "2*ATQ",
          cooldown: 3,
          levelInfo: ["+20% Damage"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Total Incineration",
          description: `Attacks all enemies. Before attacking, places a ${DEBUFFS.BURN} debuff on all enemies for 3 turns and instantly activates one tick of all ${DEBUFFS.BURN} debuffs on all enemies. Will ignore 25% of each target’s DEF. Will ignore an additional 5% for each active ${DEBUFFS.BURN} debuff on the enemy team (stacks up to 50% total Ignore DEF).<br><br>Places a 60% ${DEBUFFS.DEF} debuff on all enemies for 2 turns.`,
          damage: "3.5*ATQ",
          cooldown: 3,
          levelInfo: ["+20% Damage", "+20% Ignorer la RES"],
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
          description: `${ACTIVE}<br><br>When hit by an enemy under a ${DEBUFFS.BURN} debuff, places a ${BUFFS.SHIELD_MAGMA} buff equal to 300% of this Champion’s ATQ on this Champion for 1 turn.<br><br>${PASSIVE}<br><br>The damage enemies receive from ${DEBUFFS.BURN} debuffs will ignore ${BUFFS.BLOCK_DAMAGE} and ${BUFFS.UNKILLABLE} buffs.<br><br>This Champion & their allies deal 15% more damage against enemies under ${DEBUFFS.BURN} debuffs. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
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
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
