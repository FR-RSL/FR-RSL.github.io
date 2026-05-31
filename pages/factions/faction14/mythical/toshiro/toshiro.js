const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Quick Draw",
          description: `Attacks 1 enemy. Has a 50% chance of attacking another enemy if they are under a [Leech] debuff. <br><br>Also places a [Perfect Veil] buff on this Champion for 1 turn.`,
          damage: "2.8*ATK+0.1*HP",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sanguine Darts",
          description: `Attacks 4 times at random. Each hit increases this Champion’s ATK and HP by 5% while in their Base Form (stacks up to 100%). If a target is under a [Leech] debuff, this Champion’s ATK and HP are increased by 10% instead. <br><br>Damage inflicted by this skill increases by 15% for each [Leech] debuff on the enemy team.`,
          damage: "1.5*ATK+0.1*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bloody Typhoon",
          description: `Attacks all enemies. <br><br>Places a 60% [Decrease DEF] debuff and a [Leech] debuff for 2 turns. <br><br>Places an extra hit on enemies under 2 or more debuffs.`,
          damage: "3.5*ATK+0.1*HP",
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
          name: "Vornspore's Hunger [P]",
          description: `Fills this Champion’s Turn Meter by 5% every time they attack a target under a [Leech] debuff. <br><br>Inflicts 25% more damage to enemies under a [Leech] debuff.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "18 660",
        "ATQ": "1 520",
        "DEF": "1 090",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Iai Cut",
          description: `Attacks all enemies. Has a 50% chance of increasing the duration of all enemy debuffs by 1 turn.`,
          damage: "0.16*HP+0.7*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Drawn in Blood",
          description: `Attacks all enemies. <br><br>Heals all allies except this Champion by 10% of the damage inflicted. The value of the heal increases by 5% for each [Leech] debuff on the enemy team.<br><br><br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "0.25*HP+0.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Withering Onslaught",
          description: `Attacks all enemies. Places a 30% [Decrease SPD] debuff and a [Leech] debuff for 2 turns. <br><br>Then grants an Extra Turn.`,
          damage: "0.27*HP+0.7*ATK",
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
          name: "Enrobed in Gore [P]",
          description: `Doubles the amount of healing this Champion receives when attacking enemies under a [Leech] debuff. <br><br>Also decreases the damage taken from enemies under [Leech] debuffs by 50%.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "25 110",
        "ATQ": "1 134",
        "DEF": "1 046",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
};
