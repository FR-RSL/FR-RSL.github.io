const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spread Misery",
          description: `Attacks 1 enemy. Has a 50% chance of transferring 1 random debuff from this Champion to the target.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lethargy",
          description: `Attacks 1 enemy. Has a 60% chance of putting the target's skills on cooldown.`,
          damage: "5.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Soulbreak",
          description: `Attacks 1 enemy. Damage increases according to the number of debuffs on the target.`,
          damage: "ATK*(2+Target Debuffs)",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 421",
        "DEF": "661",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
