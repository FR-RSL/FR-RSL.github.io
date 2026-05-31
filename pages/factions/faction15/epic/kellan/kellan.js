const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Impale and Impede",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Huntsman's Gambit",
          description: `Attacks 1 enemy 2 times. The first hit has a 75% chance of decreasing the target’s Turn Meter by 50%. The second hit has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns. <br><br>Also places a [Perfect Veil] buff on this Champion for 2 turns.`,
          damage: "2.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cry of the Shrike",
          description: `Attacks all enemies. Damage increases by 5% for each debuff on the target.`,
          damage: "3.7*ATK*(1+0.05*Target Debuffs)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unforseen [P]",
          description: `Will ignore [Shield] buffs when attacking under a [Perfect Veil] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 443",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
