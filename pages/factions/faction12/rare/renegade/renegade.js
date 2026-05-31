const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lingering Pain",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 100% [Heal Reduction] debuff for 1 turn.`,
          damage: "1.2*ATK+SPD",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lash Out",
          description: `Attacks at random 3 times. Has a 50% chance of placing a 15% [Decrease SPD] debuff for 2 turns. Places a 25% [Decrease ACC] debuff for 2 turns if the target has any active buffs.`,
          damage: "1.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sacrificial Ritual",
          description: `Decreases the cooldown of all ally skills by 2 turns. This skill does not affect this Champion, or other Champions with this skill. This Champion will receive damage equal to 30% of their MAX HP. This will happen even if it kills this Champion. This skill's cooldown cannot be reduced or reset.`,
          damage: "0.3*HP",
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 046",
        "DEF": "749",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 40`,
};
