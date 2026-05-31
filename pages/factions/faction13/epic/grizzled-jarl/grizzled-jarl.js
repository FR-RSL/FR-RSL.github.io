const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Massive Halberd",
          description: `Attacks 1 enemy.<br><br>Has a 35% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ancestral Shield",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns.<br><br>Places a [Block Debuffs] buff on all allies for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Earthstomp",
          description: `Attacks all enemies.<br><br>Has a 75% chance of placing a 50% [Decrease ATK] debuff on all enemies for 2 turns.<br>Destroys each target’s MAX HP by 30% of the damage inflicted.`,
          damage: "3.3*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +15%", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "760",
        "DEF": "1 288",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "75",
        "PRÉ": "0"
      },
};

const aura = null;
