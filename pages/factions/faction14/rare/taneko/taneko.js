const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rapid Sickle",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 25% chance to steal 5% of the target's Turn Meter.`,
          damage: "1.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Whistling Blades",
          description: `Attacks all enemies. Before attacking, places a 25% [Increase ACC] buff on all allies for 2 turns. <br><br>Also has a 50% chance of decreasing the Turn Meters of all enemies by 15%.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tripwire",
          description: `Removes one random buff from each enemy. <br><br>Then has a 50% chance of placing a 15% [Decrease SPD] debuff on all enemies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Cooldown -1", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "749",
        "DEF": "1 189",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
