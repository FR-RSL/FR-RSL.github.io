const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sunburst Hail",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 35% chance of placing a [Stun] debuff for 1 turn. <br><br>After attacking, transfers all debuffs from the ally with the most debuffs to the target. Will not transfer [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], [Petrification], and [Sheep] debuffs.`,
          damage: "2.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shining Blitz",
          description: `Attacks 1 enemy. Before attacking, removes all buffs from the target. <br><br>The ally with the highest C. DMG will team up and join the attack. The ally joining the attack will use their default skill and ignore 35% of the target’s DEF.<br><br>If the enemy is killed by the ally joining this attack, activates an [Instant Turn] effect on that ally.`,
          damage: "6.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Revival Radiance",
          description: `Revives a dead ally with 75% HP and 75% Turn Meter. <br><br>Places a 50% [Increase ATK] buff and a [Perfect Veil] buff on that ally for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lightmarked [P]",
          description: `At the start of this Champion’s turn, has a 40% chance to remove any [Block Debuffs] buffs from each enemy and replace them with [Block Buffs] debuffs. Also has a 40% chance to remove any buffs positively affecting stats, and replace them with their mirrored debuff equivalent, such as [Increase ATK] being replaced with [Decrease ATK]. Buffs such as [Continuous Heal] and [Strengthen] will be replaced with [Heal Reduction] and [Weaken] debuffs respectively.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "936",
        "DEF": "1 189",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in all Battles by 30%`,
};
