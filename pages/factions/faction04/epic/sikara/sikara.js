const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Followup Volley",
          description: `Attacks 1 enemy. Fills this Champion’s Turn Meter by 25% if this attack is critical.`,
          damage: "5.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Aura Puncture",
          description: `Attacks all enemies 3 times. Each hit has a 40% chance of removing 1 random buff from the target.`,
          damage: "1.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Enfeebling Tips",
          description: `Attacks all enemies. Has a 60% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "4.3*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1", "Level 9: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Devoted Sister [P]",
          description: `Revives this Champion with 75% HP when killed.<br><br>[Only available when Alika is on the same team.]`,
          cooldown: 7,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "804",
        "DEF": "1 200",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
