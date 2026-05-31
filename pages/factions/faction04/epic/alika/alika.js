const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gap Shot",
          description: `Attacks 1 enemy. Has a 30% chance of placing an extra hit. This hit is always critical.`,
          damage: "4.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "High Value Target",
          description: `Attacks 1 enemy. Will ignore 50% of the target's DEF if their MAX HP is higher than this Champion's MAX HP.`,
          damage: "6.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Disorient",
          description: `Attacks all enemies. Has a 75% chance of increasing the cooldowns of all enemy skills by 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +15%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Devoted Sister [P]",
          description: `Revives this Champion with 75% HP when killed.<br><br>[Only available when Sikara is on the same team.]`,
          cooldown: 7,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 354",
        "DEF": "892",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
