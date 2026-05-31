const championForms = {
  form1: {
    type: "PV",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Seismic Quake",
          description: `Attacks 1 enemy. Will ignore 5% of the target’s DEF for each buff on this Champion.`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bloody Larceny",
          description: `Attacks 1 enemy. Steals 2 buffs from a target enemy. This effect cannot be resisted. <br><br>If this attack is critical, repeats the attack once.`,
          damage: "0.34*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Exterminate the Weak",
          description: `Attacks all enemies. Damage of this skill increases by 30% if this Champion's MAX HP is higher than each target's MAX HP.`,
          damage: "0.31*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
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
          name: "Limitless Science [P]",
          description: `This Champion’s C. DMG is increased by 1% for every 1,000 HP they have. <br><br>Increases this Champion’s MAX HP by 20% (stacks up to 100%) and SPD by 20 (stacks up to 100) whenever this Champion kills an enemy. Resets each Round.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 305",
        "ATQ": "980",
        "DEF": "1 387",
        "VIT": "100",
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
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Arcs of Pain",
          description: `Attacks 1 enemy 2 times. Each hit increases this Champion’s DEF by 5% (stacks up to 100%).`,
          damage: "1.79*DEF",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Pulverizing Procedure",
          description: `Attacks 1 enemy. Heals this Champion by 50% of their MAX HP. <br><br>Balances the HP of all allies. The HP levels of all allies will be brought up to the level of the ally with the highest HP.<br><br><br>Heal Multiplier: 0.5*HP`,
          damage: "5.31*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Engine of War",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Also places an [Unkillable] buff on this Champion for 2 turns.<br><br>Then, places a [Shield] buff for 2 turns on all allies with less than 50% HP. The value of the [Shield] is proportional to this Champion's DEF.<br><br><br>Shield Multiplier: 3.5*DEF`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
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
          name: "Ensorcelled Plate [P]",
          description: `When attacked, reflects 80% of the damage this Champion receives back to the attacker. Debuffs placed on this Champion decrease their producer's ACC by 10% (stacks up to 50%).`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "21 975",
        "ATQ": "837",
        "DEF": "1 553",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
};
