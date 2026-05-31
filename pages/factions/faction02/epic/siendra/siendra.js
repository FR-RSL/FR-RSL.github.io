const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Luminant Strike",
          description: `Attacks 1 enemy. <br><br>Has a 25% chance of stealing 1 random buff from the target. If this attack is critical, has a 100% chance of stealing 1 random buff from the target instead.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blinding Thrust",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 75% chance of stealing 15% of the target's Turn Meter. If a hit is critical, has a 75% chance of stealing 30% of the target’s Turn Meter instead.`,
          damage: "2.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Resplendent Burst",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ACC] buff and a 30% [Increase C. RATE] buff on this Champion for 2 turns. <br><br>Increases the duration of all buffs on this Champion by 1 turn if this attack is critical.`,
          damage: "3.85*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lightward's Boon [P]",
          description: `Increases this Champion’s ATK by 2% for each buff they receive (stacks up to 30%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 509",
        "DEF": "749",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in all Battles by 15%`,
};
