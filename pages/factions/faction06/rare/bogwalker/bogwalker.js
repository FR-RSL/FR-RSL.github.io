const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bone Katars",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.8*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Combo Attack",
          description: `Attacks all enemies. Places a 30% [Increase DEF] buff on all allies for 2 turns.`,
          damage: "2*ATK+2.3*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Damage +5%", "Level 6: Damage +5%", "Level 7: Damage +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Scout [P]",
          description: `Places a 30% [Reflect Damage] buff on all allies for 1 turn when attacked with a critical hit.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "848",
        "DEF": "1 112",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 25%`,
};
