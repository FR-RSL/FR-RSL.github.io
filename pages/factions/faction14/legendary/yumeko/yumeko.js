const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wereclaws",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit steals 7.5% of the target’s Turn Meter if this Champion has 50% HP or more.<br><br>Each hit heals this Champion by 30% of the damage inflicted if this Champion has less than 50% HP.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "2.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Destiny's Mirror",
          description: `Attacks 1 enemy. Has an 80% chance of placing a [Hex] debuff for 3 turns. <br><br>[Passive Effect]<br><br>Whenever an enemy tries to place debuffs on either this Champion or an ally, has a 55% chance of transferring those debuffs to a random enemy under a [Hex] debuff placed by this Champion. This happens before any debuffs are placed on the initial target. <br><br>Has a 30% chance instead against Bosses. <br><br>Whenever someone fills the Turn Meter of an enemy under a [Hex] debuff placed by this Champion, this Champion's Turn Meter will be filled instead. Only available when Karato Foxhunter is on the same team.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dance of Time",
          description: `Decreases the cooldowns of all ally skills by 3 turns and increases the cooldowns of all enemy skills by 3 turns.<br>Will not decrease the cooldowns of this Champion's skills. This skill can have its cooldown reset or reduced by other skills.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Deep Cover [P]",
          description: `Places a [Perfect Veil] buff on this Champion for 2 turns at the start of each Round.<br><br>This Champion is immune to all enemy debuffs if they are under a [Veil] or [Perfect Veil] buff. <br><br>Whenever a [Veil] or a [Perfect Veil] buff is placed on an enemy, has a 75% chance of stealing the buff. This happens before the buff is placed on the initial target. Only available when Karato Foxhunter is on the same team.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 315",
        "ATQ": "870",
        "DEF": "1 288",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
