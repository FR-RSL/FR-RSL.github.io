const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Silvern Slash",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Glimmer",
          description: `Attacks 3 times at random. Each hit has a 75% chance of increasing the duration of a random debuff on the target by 1 turn.`,
          damage: "1.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chain of Delusion",
          description: `Attacks all enemies. Has a 75% chance of placing a [Leech] debuff on all enemies for 2 turns.`,
          damage: "3.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lunar Cycle [P]",
          description: `Increases this Champion’s SPD by 2 for each enemy under a [Leech] debuff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 476",
        "DEF": "892",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
