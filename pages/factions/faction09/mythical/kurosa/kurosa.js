const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Surge of Chaos",
          description: `Attacks all enemies. <br><br>Heals all allies. The value of the heal is proportional to this Champion's ATK.<br><br><br>Heal Multiplier: 2*ATK`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Anything for Siroth",
          description: `Removes all debuffs from all allies.<br><br>Then places a 50% [Increase ATK] buff and a [Shield] buff on all allies for 2 turns.<br>The value of the [Shield] is proportional to this Champion's ATK.<br><br><br>Shield Multiplier: 3*ATK`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Running Rampant",
          description: `Places a [Taunt] buff and a 25% [Fortify] buff on this Champion for 2 turns.<br>Also places an [Unkillable] buff on all allies except this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
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
          name: "Collector of Pawns [P]",
          description: `[Passive Effect]<br><br>Receives 15% less damage for each alive ally.<br><br>[Active Effect]<br><br>Instantly transforms this Champion into their Alternate Form whenever their last living ally is killed.`,
          cooldown: 4,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 155",
        "ATQ": "1 509",
        "DEF": "1 068",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
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
          name: "Destroyer of All",
          description: `Attacks 1 enemy 3 times. <br><br>If this attack kills an enemy, deals pure damage to all other enemies. If the other enemies are not Bosses or minions, the amount of pure damage dealt is equal to 30% of the initial target's MAX HP. If the other enemies are Bosses or minions, the pure damage dealt is equal to 10% of their MAX HP instead. This attack cannot be critical.`,
          damage: "1.3*ATKMultiplier: Boss/Minion: 0.1*Enemy Max HP or Champion: 0.3 * Target Max HP",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Icon of Havoc",
          description: `Attacks all enemies. Before attacking, steals all buffs from all enemies. Targets whose ATK is lower than this Champion’s ATK cannot resist this effect. Also places a 25% [Weaken] debuff on all enemies for 2 turns. Targets whose ATK is equal to or lower than this Champion’s ATK cannot resist this effect.`,
          damage: "4*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Ruthless Agent",
          description: `Places a 15% [Shatter] buff and a 30% [Increase C. RATE] buff on this Champion for 3 turns. <br><br>Places a [True Fear] debuff on all enemies for 1 turn. Targets whose ATK is equal to or lower than this Champion’s ATK cannot resist this effect. <br><br>Grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
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
          name: "Vile Murderess [P]",
          description: `Deals 15% more damage for each dead ally. Each critical hit boosts this Champion’s Turn Meter by 10% for each dead ally.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 175",
        "ATQ": "1 641",
        "DEF": "1 068",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in All Battles by 35%`,
  },
  },
};
