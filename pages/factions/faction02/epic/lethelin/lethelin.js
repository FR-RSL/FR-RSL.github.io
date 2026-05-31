const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spearshower",
          description: `Attacks all enemies. <br><br>Has a 15% chance of placing a 30% [Decrease C. RATE] debuff for 2 turns. <br><br>If this Champion’s HP is full, the chance increases to 30%.`,
          damage: "2.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rallying Banner",
          description: `Places a [Taunt] buff on a target ally for 2 turns. <br><br>Also places a 30% [Reflect Damage] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Field Medic",
          description: `Decreases the duration of 2 random debuffs on all allies by 1 turn. Then, heals all allies by 5% of their MAX HP. Heals by an additional 2.5% MAX HP for each debuff that has its duration decreased.<br><br><br>Heal Multiplier: (0.05*Target Max HP)+(0.025*Target Max HP*totalDecreasedTurnsCountBySkill)`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "969",
        "DEF": "1 189",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
