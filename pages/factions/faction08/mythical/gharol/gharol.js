const championForms = {
  form1: {
    type: "PV",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Foecrusher",
          description: `Attacks 1 enemy. Before attacking, removes all buffs from the target.<br><br>Increases the cooldown of a random skill on the target by 2 turns, even if this attack lands as a weak hit.`,
          damage: "0.28*HP+1*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hammerquake",
          description: `Attacks all enemies. Places a [Provoke] debuff on all enemies for 1 turn. This debuff will ignore [Block Debuffs] buff and can be placed even if this attack lands as a weak hit.<br><br>Also places a protected [Unkillable] buff and a [Counterattack] buff on this Champion for 3 turns.`,
          damage: "0.25*HP+1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bonded by Blood",
          description: `Removes all debuffs from all allies and places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns.<br><br>Also places a [Shield] buff on all allies equal to 30% of this Champion's MAX HP for 2 turns. Increases the value of the [Shield] by an additional 3% of this Champion's MAX HP per each debuff removed by this skill.<br><br><br>Shield Multiplier: ((0.03*removedEffectsCount)+0.3)*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
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
          name: "Kill or Cure [P]",
          description: `When attacked, decreases the duration of all buffs on the attacker by 1 turn. Occurs once per hit.<br><br>Also heals all allies except this Champion by 50% of the damage taken, and heals this Champion by 25% of the damage taken, whenever this Champion is hit. Occurs once per hit.<br><br>Heal Multiplier: 0.5*Damage Dealt`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 955",
        "ATQ": "958",
        "DEF": "1 299",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Magma Slam",
          description: `Attacks all enemies. Has a 25% chance of repeating the attack. Will ignore [Block Damage] buffs.`,
          damage: "2.7*ATK+0.12*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Calamitous Maul",
          description: `Attacks all enemies. Damage of this skill increases by 10% for each buff on this Champion and on the target.<br><br>Will ignore 30% of the target's DEF. Will ignore 50% of the target's DEF instead if this Champion has more buffs than the target.`,
          damage: "4*ATK+0.12*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
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
          img: "assets/sort6.webp",
          name: "Cornered Animal",
          description: `Removes all debuffs from this Champion.<br><br>Places a 50% [Increase ATK] buff, a 30% [Increase C. DMG] buff, and a 30% [Increase C. RATE] buff on all allies for 3 turns.<br><br>Grants an Extra Turn.<br><br>[This skill unlocks when this Champion has 3 or more debuffs, or when this Champion has 50% or less HP.]`,
          cooldown: 2,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Crimson Haze [P]",
          description: `Whenever an ally attacks, this Champion has a 50% chance to team up with them and join their attack.<br><br>This Champion inflicts more damage as their HP decreases (by 1% for every 1% of HP lost).<br><br>This Champion receives less damage as their HP decreases (by 0.5% for every 1% of HP lost).`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 020",
        "ATQ": "1 608",
        "DEF": "1 178",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
};
