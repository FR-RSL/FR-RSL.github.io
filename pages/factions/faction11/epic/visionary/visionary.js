const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ectoplasm",
          description: `Attacks 1 enemy. Has a 30% chance of decreasing the target’s Turn Meter by 15%. This chance increases to 100% if the target is under a [Decrease C. RATE] debuff or a [Decrease C. DMG] debuff.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Haunt",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease C. RATE] debuff and a 25% [Decrease C. DMG] debuff on all enemies for 2 turns.`,
          damage: "3.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dark Dealings",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on all allies for 2 turns. Also fills the Turn Meters of all allies by 15%.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 277",
        "DEF": "1 002",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 24%`,
};
