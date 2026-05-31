const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crippling Blows",
          description: `Attacks 1 enemy 3 times. Places a 30% [Decrease SPD] debuff on the target for 2 turns if this attack is critical.`,
          damage: "1.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Death Burst",
          description: `Attacks 1 enemy. Has a 70% chance of placing two 5% [Poison] debuffs on all enemies for 2 turns. If the hit is critical, has a 70% chance of placing four 5% [Poison] debuffs on all enemies for 2 turns.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blight",
          description: `Decreases the Turn Meter of all enemies with less than 50% HP by 100%. Has an 80% chance of placing a 50% [Decrease ATK] debuff on all enemies for 2 turns. Also has an 80% chance of placing a 60% [Decrease DEF] debuff on all enemies for 2 turns. Gets an Extra Turn if an enemy's Turn Meter is decreased by this Skill.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 387",
        "DEF": "980",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Doom Tower by 70`,
};
