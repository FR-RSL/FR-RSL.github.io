const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Scorpion Tips",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "2.77*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wearying Tactics",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "4.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Damage +10%", "Level 8: Buff/Debuff Chance +10%", "Level 9: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tiger's Strength",
          description: `Places a [Block Debuffs] buff and a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 070",
        "ATQ": "1 255",
        "DEF": "1 035",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
