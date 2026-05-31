const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Satrap's Secrets",
          description: `Attacks 1 enemy. <br><br>Has a 100% chance of stealing 1 random buff from the target. Also has a 50% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "5.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dragonkin Knowledge",
          description: `Attacks 1 enemy. <br><br>Has a 75% chance of placing a 50% [Decrease RES] debuff, a [Pain Link] debuff, and a 30% [Decrease SPD] debuff for 2 turns. These debuffs are protected when placed on Bosses. <br><br>Heals all allies by 5% of this Champion’s MAX HP for each debuff placed.<br><br><br>Heal Multiplier: 0.05*HP*Debuffs Applied to Enemy Team (Current Turn)`,
          damage: "6.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ward of the Heritage",
          description: `Places a [Block Debuffs] buff on all allies for 2 turns. <br><br>Heals all allies by 15% of this Champion's MAX HP. Heals each ally by an additional 3% for each debuff on them. <br> <br>Removes any debuffs from allies negatively affecting stats, and replaces them with their mirrored buff equivalent, such as [Decrease ATK] being replaced with [Increase ATK]. Debuffs such as [Block Buffs], [Heal Reduction] and [Weaken] will be replaced with [Block Debuffs], [Continuous Heal] and [Strengthen] buffs respectively. <br><br>Does not convert [Decrease C. RATE] and [Decrease C. DMG] debuffs into [Increase C. RATE] and [Increase C. DMG] buffs respectively.<br><br><br>Heal Multiplier: (0.15*HP)+(0.03*HP*Target Debuffs)`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Resilient Caste [P]",
          description: `Increases this Champion’s MAX HP by 10% whenever this Champion heals themselves using a skill (stacks up to 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "870",
        "DEF": "1 266",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 28%`,
};
