const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Briar Arrows",
          description: `Attacks 1 enemy. Has a 50% chance of removing 1 random buff from the target. Also has a 10% chance of granting this Champion an Extra Turn.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Squall of Shafts",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Grants an Extra Turn if a 60% [Decrease DEF] debuff is placed on all enemies by this skill.`,
          damage: "3.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hunt The Mists",
          description: `Places a 50% [Increase ATK] buff and a 50% [Increase ACC] buff on this Champion for 3 turns, then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 376",
        "DEF": "903",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
