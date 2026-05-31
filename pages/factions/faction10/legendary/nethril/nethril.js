const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blood Harvest",
          description: `Attacks 1 enemy 3 times. Has a 30% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ghastly Horrors",
          description: `Attacks all enemies. Has a 50% chance of placing a [Stun] debuff on all enemies for 1 turn. Places a 30% [Decrease SPD] debuff for 2 turns if the target is not under a [Stun] debuff.`,
          damage: "4.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bat Swarm",
          description: `Attacks all enemies. Decreases the Turn Meter by 75%.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 454",
        "DEF": "991",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
