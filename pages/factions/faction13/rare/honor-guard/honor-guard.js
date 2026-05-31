const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bell Ringer",
          description: `Attacks 1 enemy.<br>Has a 50% chance of placing a 25% [Decrease ACC] debuff for 2 turns if the target has no active buffs.`,
          damage: "3.12*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fate Transfer",
          description: `Attacks 1 enemy.<br><br>Has a 50% chance of stealing 2 random buffs from the target.`,
          damage: "5.25*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Astral Chains",
          description: `Attacks 1 enemy.<br><br>Has a 75% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "5.1*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +15%", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "760",
        "DEF": "1 233",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "55",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Force Ally DEF in All Battles by 25%`,
};
