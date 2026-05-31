const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Reaping Cull",
          description: `Attacks 1 enemy 2 times. Each hit has an extra 20% chance of inflicting a critical hit.<br><br>Each hit restores this Champion's destroyed MAX HP, equal to the damage inflicted. Each hit also heals this Champion by 30% of the damage inflicted. <br><br>Grants an Extra Turn if this attack kills an enemy.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Horde of Calamity",
          description: `Attacks 1 enemy 4 times. Each hit has an extra 20% chance of inflicting a critical hit.<br><br>The first hit will ignore 10% of the target's DEF. Each subsequent hit will ignore an additional 5% of the target's DEF.<br><br>The first hit places a [Block Buffs] debuff for 2 turns. <br><br>The second hit places a 60% [Decrease DEF] debuff for 2 turns. <br><br>The third hit places a 25% [Weaken] debuff for 2 turns. <br><br>The fourth hit places a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Necroclysm",
          description: `Attacks all enemies. This attack is always critical, and will ignore 20% of each enemy's DEF.<br><br>If this attack kills an enemy, places an [Unkillable] buff on this Champion for 1 turn. <br><br>If this attack kills 2 or more enemies, places an [Unkillable] buff on this Champion for 2 turns instead.`,
          damage: "4.8*ATK",
          cooldown: 5,
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
          name: "Immortal Creation [P]",
          description: `At the start of this Champion's turn, places a [Shield] buff equal to 50% of this Champion's MAX HP on them for 1 turn. Also places a 50% [Increase ATK] buff on this Champion for 1 turn.<br><br>Shield Multiplier: 0.5*HP`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 845",
        "ATQ": "1 553",
        "DEF": "1 178",
        "VIT": "105",
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
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Fell Scythe",
          description: `Attacks 1 enemy. Has an extra 20% chance of inflicting a critical hit.<br><br>After attacking, transfers all debuffs from this Champion to the target. <br><br>If the target is under a [Hex] debuff before the attack, transfers all debuffs from this Champion to the target before attacking instead.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Final Testament",
          description: `Attacks all enemies. Has an extra 20% chance of inflicting a critical hit. Before attacking, removes all debuffs from this Champion. <br><br>Will ignore 20% of each enemy's DEF. Will ignore 35% of each target's DEF instead if they are under a [Hex] debuff.<br><br>Damage increases by 10% for each debuff on each target.`,
          damage: "4.2*ATK*(1+0.1*Target Debuffs)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Termination",
          description: `Attacks all enemies. Has an extra 20% chance of inflicting a critical hit. Before attacking, places a [Hex] debuff and a 60% [Decrease DEF] debuff for 2 turns. <br><br>Will ignore [Life Barrier], [Poison Cloud], and [Ally Protection] buffs.`,
          damage: "4.4*ATK",
          cooldown: 3,
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
          name: "Banquet of Death [P]",
          description: `Whenever this Champion attacks an enemy under a [Hex] debuff, heals this Champion by 30% of the damage inflicted.<br><br>Also increases this Champion's ATK by 20% for each enemy under a [Hex] debuff.<br><br>Heal Multiplier: 0.3*Damage Dealt`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 845",
        "ATQ": "1 553",
        "DEF": "1 178",
        "VIT": "105",
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
};
