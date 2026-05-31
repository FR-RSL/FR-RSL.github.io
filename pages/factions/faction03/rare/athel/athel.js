const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Strike Down",
          description: `Attacks 1 enemy 3 times. Each hit has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "1.3*ATK + 30",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +5%", "Level 7: Damage +5%", "Level 8: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Divine Blades",
          description: `Attacks all enemies. Has an extra 15% chance of inflicting a critical hit.`,
          damage: "4.1*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Higher Blessing",
          description: `Places a 25% [Increase ATK] buff on this Champion for 2 turns. Places a 30% [Increase DEF] buff on this Champion for 2 turns if this Champion's current HP is less than 50%. Gains an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 189",
        "DEF": "936",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 15%`,
};
