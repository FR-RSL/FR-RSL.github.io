const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Defiled Earth",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 30% [Decrease SPD] debuff on the enemy for 2 turns.`,
          damage: "4.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Locus of Diabolism",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease C. RATE] debuff and a 25% [Decrease C. DMG] debuff on all enemies for 2 turns.`,
          damage: "4.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brimstone Boon",
          description: `Removes 1 random debuff from all allies. <br><br>Then places a 30% [Increase C.RATE] buff and a 30% [Increase С. DMG] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blood for Blood [P]",
          description: `Heals an ally by 10% of their MAX HP when they are hit with a critical hit.<br><br>Heal Multiplier: 0.1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "859",
        "DEF": "1 167",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
