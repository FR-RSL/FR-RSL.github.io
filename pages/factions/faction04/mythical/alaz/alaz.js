const championForms = {
  form1: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Photon Ax",
          description: `Attacks 1 enemy 2 times. Places an extra hit if the target is under a [Shield] buff. <br><br>Each hit will ignore [Shield] buffs.`,
          damage: "2*DEF",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rolling Thunder",
          description: `Attacks all enemies. Before attacking, places a 60% [Increase DEF] buff on all allies for 2 turns. <br><br>Places an extra hit on targets with less than 50% HP after the first hit. If the target’s HP is equal to or higher than 50% after the first hit, destroys the target’s MAX HP by 30% of the damage inflicted instead.`,
          damage: "4.2*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Searing Glare",
          description: `Places a [Provoke] debuff on a target enemy for 2 turns. This debuff cannot be resisted if the target has less than 50% HP.<br><br>Also places a [Counterattack] buff on all allies for 2 turns, and a [Block Damage] buff on all allies for 1 turn.`,
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
          name: "Cuirass of the Sun [P]",
          description: `Increases this Champion's DEF by 5% each time they counterattack (stacks up to 100%). Resets each Round.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 970",
        "ATQ": "980",
        "DEF": "1 476",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Increases Ally DEF in All Battles by 35%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Boltquake",
          description: `Attacks all enemies. Places an extra hit on enemies under [HP Burn] debuffs.`,
          damage: "0.18*HP",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Solar Flare",
          description: `Attacks all enemies. Places a [HP Burn] debuff for 2 turns. This debuff cannot be resisted by enemies under a [Stone Skin] buff. <br><br>Then, instantly activates one tick of all [HP Burn] debuffs on enemies under a [Stone Skin] buff. <br><br>Also places a [True Fear] debuff on all enemies for 1 turn.`,
          damage: "0.3*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Revitalizing Ray",
          description: `Fully restores all allies’ destroyed MAX HP, and heals all allies by 30% of this Champion’s MAX HP. <br><br>Also places a 25% [Strengthen] buff and a 50% [Increase RES] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.3*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
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
          name: "Heart of Heavens [P]",
          description: `Increases this Champion’s HP by 6 for every 1 DEF they have when in their Alternate Form. <br><br>Increases the chance of enemy skills not activating when under [Fear] or [True Fear] debuffs by 20%, while also under a [HP Burn] debuff.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 955",
        "ATQ": "958",
        "DEF": "1 299",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Increases Ally DEF in All Battles by 35%`,
  },
  },
};
