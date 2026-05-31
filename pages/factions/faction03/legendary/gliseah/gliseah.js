const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Glittering Slash",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Freeze] debuff for 1 turn. Also applies a [Debuff Spread] effect, taking all debuffs from the target and placing them on all enemies under [Freeze] debuffs.`,
          damage: "3.2*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Breath of Rime",
          description: `Attacks all enemies. Steals all buffs from all enemies. <br><br>Places a 25% [Weaken] debuff for 2 turns.`,
          damage: "3.3*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Everwinter",
          description: `Places a [Block Debuffs] buff on all allies for 2 turns. <br><br>Has a 75% chance of placing a [Freeze] debuff on all enemies for 1 turn. <br><br>Fills the Turn Meters of all allies by 15%. Fills the Turn Meters of each ally by an extra 5% for each [Freeze] debuff placed by this skill.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Timeless [P]",
          description: `This Champion’s skills cannot be put on cooldown. <br><br>Whenever an enemy tries to put either this Champion’s skills or an ally's skills on cooldown, places a [Freeze] debuff on that enemy. Also has a 50% chance of denying the cooldown increase effect.<br><br>The [Freeze] debuff cannot be blocked or resisted. Will not deny cooldown increasing effects from Bosses.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "826",
        "DEF": "1 509",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 60`,
};
