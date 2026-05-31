const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Searing Rebuke",
          description: `HP Burn Attacks 1 enemy. Places a [HP Burn] debuff for 2 turns. This debuff cannot be resisted.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Smolder",
          description: `Attacks all enemies. Places a 5% [Poison] debuff for 2 turns. Places a second 5% [Poison] debuff for 2 turns if the attack is critical.`,
          damage: "4.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Combust",
          description: `Instantly activates all [Poison] debuffs on all enemies.`,
          damage: "Poison Debuff Count",
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 387",
        "DEF": "1 222",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Faction Wars by 24%`,
};
