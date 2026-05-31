const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gore-Slick Maul",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Leech] debuff on the target for 2 turns before attacking.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bonebreaker Stomp",
          description: `Attacks all enemies. Has a 60% chance of placing a 50% [Decrease ATK] debuff or a 25% [Decrease C. DMG] debuff for 2 turns.`,
          damage: "3.6*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +20%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Smothering Swath",
          description: `Attacks all enemies. Places a 15% [Continuous Heal] buff on all allies for 2 turns. Places an additional 7.5% [Continuous Heal] buff on all allies for 1 turn if at least one enemy is hit with a critical hit.`,
          damage: "4*DEF",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "694",
        "DEF": "1 321",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 30%`,
};
