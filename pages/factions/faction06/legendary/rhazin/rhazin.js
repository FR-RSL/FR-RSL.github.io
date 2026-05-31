const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bone Sword",
          description: `Attacks 1 enemy 3 times. Has a 20% chance of removing 1 random buff from the target.`,
          damage: "DEF*1.5",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +15%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shear",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 60% [Decrease DEF] debuff and a 25% [Weaken] debuff for 2 turns.`,
          damage: "DEF*6",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bog Down",
          description: `Attacks all enemies. Decreases the Turn Meter by 100%.`,
          damage: "DEF*4",
          cooldown: 7,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +15%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "1 046",
        "DEF": "1 310",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Arena by 90`,
};
