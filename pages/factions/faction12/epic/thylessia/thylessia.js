const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Weft of Madness",
          description: `Attacks 1 enemy. Has a 50% chance of applying a [Debuff Spread] effect, taking 1 random debuff from the target and placing it on all enemies under [Hex] debuffs.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shrieking Voices",
          description: `Attacks all enemies. Increases the duration of all debuffs on all enemies by 1 turn.`,
          damage: "3.7*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Melancholia",
          description: `Attacks all enemies. Places a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Feast of Woe [P]",
          description: `When attacking enemies under [Decrease DEF] debuffs, has a 50% chance of placing a [Hex] debuff on them for 2 turns.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 454",
        "DEF": "1 002",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
