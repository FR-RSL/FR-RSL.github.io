const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Moonclaw",
          description: `Attacks 1 enemy. Places a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "4.05*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Scarlet Crescent",
          description: `Attacks 1 enemy 2 times. <br><br>Will ignore 15% of the target's DEF, as well as [Stone Skin], [Strengthen], [Ally Protection], and [Shield] buffs. <br><br>Places a [Block Revive] debuff if the target is killed.`,
          damage: "2.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Moonlight Gift",
          description: `Places a 50% [Increase ATK] buff, a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 3 turns. <br><br>Grants an Extra Turn.`,
          cooldown: 6,
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
          name: "Relentless Hunt [P]",
          description: `Heals this Champion by 20% of the damage inflicted. Places a [Revive On Death] buff on this Champion for 2 turns every time they kill an enemy.<br><br>Heal Multiplier: 0.2*Damage Dealt`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 680",
        "ATQ": "1 652",
        "DEF": "1 090",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/crit.webp",
    description: `Increases Ally C.RATE in All Battles by 27%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Spirit of the Pack",
          description: `Attacks all enemies. This attack will not trigger counterattacks. <br><br>Places an extra hit on enemies under [True Fear] debuffs.`,
          damage: "2.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Life Shredder",
          description: `Attacks all enemies 2 times. Places a [True Fear] debuff for 2 turns. <br><br>This attack will not trigger counterattacks. Will also ignore [Unkillable] and [Block Damage] buffs.`,
          damage: "2.15*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%", "Level 4: Cooldown -1"],
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
          name: "Embrace the Beast [P]",
          description: `Increases this Champion’s ATK and C. DMG by 20% while in their Alternate Form.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 680",
        "ATQ": "1 652",
        "DEF": "1 090",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/crit.webp",
    description: `Increases Ally C.RATE in All Battles by 27%`,
  },
  },
};
