const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Soultap",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Leech] debuff for 2 turns. The chance increases to 50% if this attack is critical.`,
          damage: "3.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wanderer's Weirding",
          description: `Attacks all enemies. Has a 50% chance of placing a 15% [Decrease SPD] debuff for 2 turns. Also places a 15% [Increase SPD] buff on this Champion for 2 turns if the attack is critical.`,
          damage: "3.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Waste Away",
          description: `Attacks 1 enemy. Destroys the enemy’s MAX HP by 30% of the damage inflicted if this attack is critical.`,
          damage: "5.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 354",
        "DEF": "760",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
