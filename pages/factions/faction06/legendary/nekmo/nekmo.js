const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Steelmelt Acid",
          description: `Attacks all enemies. Has a 40% chance of placing a 50% [Decrease ATK] debuff for 2 turns. The chance increases to 75% against targets under debuffs.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Planar Chains",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease SPD] debuff and a [Leech] debuff for 2 turns.`,
          damage: "3.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Speed Weirding",
          description: `Places a 30% [Increase SPD] buff on all allies for 2 turns and fills their Turn Meters by 30%, then grants this Champion an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rune of Haste [P]",
          description: `Fills this Champion's Turn Meter by 5% each time a debuff on an enemy is removed, transferred, or expires.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 233",
        "DEF": "1 189",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "30"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
