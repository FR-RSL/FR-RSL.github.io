const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Undaunted Assault",
          description: `Attacks 1 enemy. Inflicts 30% extra C. DMG if this Champion has less than 50% HP.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Guiding Example",
          description: `Attacks 1 enemy. Places a 15% [Increase C. DMG] buff on all allies for 2 turns if this attack is critical.`,
          damage: "5.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Depletion",
          description: `Attacks 1 enemy. Has a 75% chance of removing 2 random buffs from the target.`,
          damage: "6*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 288",
        "DEF": "859",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
