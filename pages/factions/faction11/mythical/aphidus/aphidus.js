const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Blink Cut",
          description: `Attacks 1 enemy. Places a 60% [Decrease DEF] debuff for 2 turns.<br><br>Also places a [Perfect Veil] buff on this Champion for 1 turn.`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Umbral Stingers",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ATK] buff on all allies for 2 turns.<br><br>Will ignore 25% of a target's DEF if they are not under a [HP Burn] debuff. Will ignore 50% of a target's DEF if they are under a [HP Burn] debuff.<br><br>Then, increases the duration of all enemy debuffs by 1 turn.`,
          damage: "4*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blisterbug Horde",
          description: `Attacks all enemies. Damage increases by 25% against targets under any debuffs.<br><br>Instantly activates one tick of all [HP Burn] debuffs on all enemies. <br><br>If an enemy is not under any [HP Burn] debuffs, place a [HP Burn] debuff on them for 2 turns.`,
          damage: "4*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
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
          name: "Fleshsearer [P]",
          description: `Each time this Champion places a [HP Burn] debuff, decreases the target's DEF by 3% (stacks up to 30%). <br><br>For each [HP Burn] debuff on the enemy team, increase this Champion's C.DMG by 10% (stacks up to 100%). <br><br>Whenever an enemy [HP Burn] debuff activates, increase this Champion's ATK by 5% (stacks up to 50%). Resets each Round.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 010",
        "ATQ": "1 586",
        "DEF": "1 134",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in All Battles by 35%`,
  },
  },
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Crushing Pincers",
          description: `Attacks 1 enemy. Places a 50% [Increase ACC] buff on the ally with the highest ACC for 2 turns and fills their Turn Meter by 10%.`,
          damage: "3.7*DEF",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Putrid Cocoon",
          description: `Attacks all enemies. Places a [Stun] debuff on all enemies for 1 turn. <br><br>Also places two 15% [Continuous Heal] buffs on all allies for 2 turns.`,
          damage: "2.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Behold The Beast",
          description: `Places a [Provoke] debuff on all enemies for 1 turn. <br><br>Also places a 25% [Strengthen] buff and a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
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
          name: "Entomophobia [P]",
          description: `When attacked, has a 100% chance of placing a 25% [Weaken] debuff, and a 40% chance of placing a [Stun] debuff on the attacker for 1 turn. <br><br>Increases this Champion's DEF by 1 point for every 2 points of ATK when in their Alternate Form.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "18 165",
        "ATQ": "1 145",
        "DEF": "1 498",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in All Battles by 35%`,
  },
  },
};
