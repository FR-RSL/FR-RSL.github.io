const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ferocity",
          description: `Attacks 1 enemy 2 times. Has a 15% chance of granting an Extra Turn.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bloody Swath",
          description: `Attacks 1 enemy. Has an 80% chance of placing a 25% [Weaken] debuff for 3 turns.`,
          damage: "6.4*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Overmaster",
          description: `Attacks 1 enemy. Has an 80% chance of placing a 60% [Decrease DEF] debuff for 3 turns. Heals this Champion by 30% of the damage inflicted.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "6.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 487",
        "DEF": "760",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 40`,
};
