const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cruel Trap",
          description: `Attacks 1 enemy. Has a 15% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "3*DEF+1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Devastating Wounds",
          description: `Attacks all enemies. Has a 40% chance of placing a 50% [Heal Reduction] debuff for 2 turns.`,
          damage: "2*DEF+2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mobile Fort",
          description: `Heals all allies by 10% of their MAX HP. Places a 30% [Increase DEF] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.1*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "859",
        "DEF": "1 134",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 23%`,
};
