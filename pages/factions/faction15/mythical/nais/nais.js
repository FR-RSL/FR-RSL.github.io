const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Allpiercer",
          description: `Attacks 1 enemy. <br><br>Will ignore [Shield], [Unkillable], and [Block Damage] buffs.`,
          damage: "0.26*HP+1.2*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blackfeather Barrage",
          description: `Attacks all enemies. This attack will not trigger counterattacks and ignores [Shield] buffs. <br><br>Also steals 20% of the Turn Meter from each enemy. This effect cannot be resisted by enemies with more than 50% Turn Meter.`,
          damage: "0.3*HP+1.85*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Thief's Omen",
          description: `Attacks 1 enemy. Deals double damage to Bosses. <br><br>Destroys the target's MAX HP and decreases the target's ATK, DEF, SPD, RES, and ACC by 10% when this skill is used against them for the first time. This effect does not work against Bosses. <br><br>Also increases this Champion's MAX HP, ATK, DEF, SPD, RES, and ACC by 10% each time this Champion decreases enemy stats with this skill. <br><br>Finally, places a [Block Revive] debuff if the target is killed by this skill.`,
          damage: "(!If Boss*(0.47*HP+2.5*ATK))+(If Boss*(0.94*HP+5*ATK))",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%"],
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
          name: "Glinting Saviour [P]",
          description: `Deals 5% more damage for each 10% HP the target has lost.<br><br>Also prevents this Champion's death and keeps them alive on 1 HP when receiving fatal damage, then transforms them into their Alternate Form.`,
          cooldown: 4,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 980",
        "ATQ": "1 663",
        "DEF": "859",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
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
          name: "Fae Talons",
          description: `Attacks 1 enemy 2 times. Each hit heals this Champion by 7.5% of their MAX HP. <br><br>If this Champion’s HP is full, each hit fills this Champion’s Turn Meter by 15% instead.<br><br><br>Heal Multiplier: 0.075*HP`,
          damage: "0.13*HP",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Murder of Crows",
          description: `Attack all enemies. Places a [Provoke] debuff for 1 turn if this Champion has more than 50% HP. This debuff cannot be resisted if this Champion has more than 75% HP. <br><br>If this Champion has 50% HP or less, places a [Stun] debuff for 1 turn instead. This debuff cannot be resisted.`,
          damage: "0.45*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Feathershield",
          description: `Removes all debuffs from this Champion. Places a number of 15% [Continuous Heal] buffs on this Champion, equal to the amount of debuffs removed by this skill. <br><br>Also places a [Counterattack] buff and a [Block Damage] buff on this Champion for 2 turns. These buffs cannot be removed, stolen, or transferred.`,
          cooldown: 6,
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
          name: "Fae Intervention [P]",
          description: `Increases this Champion’s MAX HP, DEF, SPD, RES, and ACC by 15% for every dead enemy and ally, including Bosses and their minions, in battle (stacks up to 100%). <br><br>Also revives 1 random ally with 50% HP and 50% Turn Meter each time this Champion kills an enemy.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "24 780",
        "ATQ": "881",
        "DEF": "1 321",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
};
