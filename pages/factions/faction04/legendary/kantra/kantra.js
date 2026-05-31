const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bane Hatchet",
          description: `Attacks 1 enemy 2 times. Each hit has a 40% chance of stealing 1 random buff from the target.`,
          damage: "1.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chaos Tempest",
          description: `Attacks all enemies 3 times. Each hit has a 50% chance of placing one of the following debuffs for 2 turns: a [Block Buffs] debuff, a 50% [Decrease ATK] debuff, a 30% [Decrease SPD] debuff, a 25% [Weaken] debuff, a 50% [Decrease ACC] debuff, or a 100% [Heal Reduction] debuff.`,
          damage: "1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "No Escape [P]",
          description: `Decreases each enemy's ACC by 10 for each debuff they are under.<br><br>This Champion will receive 4% less damage for each debuff on the attacker.<br><br>Heals this Champion by 1,250 HP each time a debuff expires on an enemy.<br><br>Has a 75% chance of placing a Provoke debuff for 1 turn on enemies under 5 or more debuffs at the start of this Champion's turn.<br><br>This Champion can place debuffs on weak hits.<br><br>Heal Multiplier: 1250`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "815",
        "DEF": "1 542",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
