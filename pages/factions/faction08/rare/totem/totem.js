const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poisonous Evocation",
          description: `Attacks 1 enemy. Has a 20% chance of placing a 2.5% [Poison] debuff on the target for 2 turns.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malediction",
          description: `Attacks 1 enemy. Has a 50% chance of removing 1 random buff from the target. Places a 15% [Continuous Heal] buff on this Champion for 2 turns if a buff is removed.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Manglestorm",
          description: `Attacks all enemies. Places a 30% [Decrease DEF] debuff on the target for 2 turns.`,
          damage: "3.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 002",
        "DEF": "1 046",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
