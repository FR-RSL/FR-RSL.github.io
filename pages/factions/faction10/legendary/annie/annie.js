const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pretty Nails",
          description: `Attacks 1 enemy 3 times. Each hit has a 50% chance of placing a 100% [Heal Reduction] debuff and a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hollow Doll",
          description: `Attacks 1 enemy 2 times. Before attacking, places a 50% [Increase ATK] buff on this Champion for 2 turns. Will ignore 25% of the target's DEF. <br><br>Also places a [Perfect Veil] buff on this Champion for 2 turns.<br><br>Then, fills this Champion's Turn Meter by 30%.`,
          damage: "2.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Playdate",
          description: `Attacks 1 enemy. Will ignore 25% of the target's DEF. Destroys the target's MAX HP by 25% of the damage inflicted.<br><br>Will repeat the attack if the target has both higher DEF and higher MAX HP than this Champion.<br><br>Places a [Revive On Death] buff on this Champion for 2 turns if this attack kills an enemy.`,
          damage: "5.7*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Toys Don't Die [P]",
          description: `When revived, attacks the enemy that killed this Champion with the default Skill. Also fills this Champion's Turn Meter by 25% and places a [Shield] buff on this Champion equal to 50% of their MAX HP for 2 turns.<br><br>Shield Multiplier: 0.5*HP`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Magical Heart [P]",
          description: `Each hit has a 50% chance of decreasing the target's Turn Meter by 10% and a 100% chance of destroying the target's MAX HP by 10% of the damage inflicted when attacking enemies under [Heal Reduction] or [Decrease DEF] debuffs.<br><br>Also heals this Champion by 10% of the damage inflicted when attacking enemies under [Heal Reduction] or [Decrease DEF] debuffs.<br><br>[Will not heal from damage inflicted by Masteries.]<br><br>Heal Multiplier: 0.1*Damage Dealt`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 597",
        "DEF": "793",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
