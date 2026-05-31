const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flourish of Slaughter",
          description: `Attacks all enemies. Has a 50% chance of decreasing each target's Turn Meter by 10%.<br><br>If Minaya is on the same team, attacks all enemies 2 times and the chance to decrease each target's Turn Meter becomes 100% instead. The damage of each hit will be decreased by 50%.`,
          damage: "0.16*HPMultiplier: 0.08*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Beastly Bellow",
          description: `Has a 75% chance of placing a [Provoke] debuff on all enemies for 1 turn. Also places a [Block Debuffs] buff and a 60% [Increase DEF] buff on this Champion for 2 turns.<br><br>If Minaya is on the same team, the [Provoke] debuff placed by this Champion cannot be resisted.<br><br>If Minaya is on the same team, also removes all debuffs from all allies and then places a [Block Debuffs] buff and [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Battle Waltz",
          description: `Attacks all enemies. Places a 50% [Decrease ATK] debuff and a 60% [Decrease DEF] debuff on all enemies for 2 turns. <br><br>If Minaya is on the team, these debuffs cannot be resisted.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ferocious Guard [P]",
          description: `Counterattacks when hit by enemies under [Decrease ATK], [Decrease DEF], or [Decrease SPD] debuffs. <br><br>Always counterattacks when hit if Minaya is on the same team.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Spectacle [P]",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns if this Champion kills an enemy.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "27 090",
        "ATQ": "815",
        "DEF": "958",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 80`,
};
