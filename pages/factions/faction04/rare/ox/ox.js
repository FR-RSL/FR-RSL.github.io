const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Onrush",
          description: `Attacks 1 enemy. Fills this Champion's Turn Meter by 10% if this attack is critical.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shatter Defenses",
          description: `Attacks 1 enemy. Has a 60% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "7.1*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Destroy Confidence",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Block Active Skills] debuff for 2 turns. Has an extra 15% chance of inflicting a critical hit.`,
          damage: "8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 167",
        "DEF": "1 046",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 18%`,
};
