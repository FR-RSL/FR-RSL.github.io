const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Befoulment",
          description: `Attacks 2 times at random. Has a 75% chance of placing a [Hex] debuff for 5 turns. This debuff cannot be resisted. Each critical hit decreases the cooldown of the Not Of This World skill by 1 turn.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hexreaper",
          description: `Attacks all enemies. Damage increases by 50% for each [Hex] debuff on the enemy team. Stacks up to 300%.`,
          damage: "3.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Not Of This World",
          description: `Places a [Perfect Veil] buff on this Champion for 3 turns. Grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Cruel Angel [P]",
          description: `Has a 50% chance of placing a [True Fear] debuff on all enemies for 1 turn when an enemy loses 30% or more of their MAX HP in a single hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 542",
        "DEF": "969",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 30%`,
};
