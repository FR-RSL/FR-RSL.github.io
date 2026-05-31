const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Skewer",
          description: `Attacks 1 enemy. If the hit is critical, places a 15% [Decrease SPD] debuff.`,
          damage: "5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Infernal Skill",
          description: `Places a [Counterattack] buff and a 15% [Continuous Heal] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Paralyzing Bolts",
          description: `Attacks all enemies. Has a 35% chance of placing a [Sleep] debuff for 1 turn. This debuff cannot be removed.`,
          damage: "5.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "892",
        "DEF": "1 013",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Force Ally HP in All Battles by 18%`,
};
