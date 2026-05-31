const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Luck Swap",
          description: `Attacks 1 enemy 2 times. Each hit has a 60% chance of removing 1 random buff from the target. If a buff is removed, has a 35% chance of stealing that buff.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lucky Charms",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns. Places a 30% [Increase SPD] buff on all allies with more than 50% HP for 2 turns. Also has a 50% chance of placing a 30% [Increase C. RATE] buff on those allies for 2 turns.<br><br>Places a [Revive On Death] buff on all allies with less than 50% HP for 2 turns. Also has a 50% chance of placing a 15% [Continuous Heal] buff on those allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Uncatchable",
          description: `Places a 30% [Decrease SPD] debuff on all enemies for 2 turns. Decreases the Turn Meter of all enemies by 15%.<br><br>Fills the Turn Meters of all allies by 15% if any enemy's Turn Meter is below 50%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "1 002",
        "DEF": "1 189",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 70`,
};
