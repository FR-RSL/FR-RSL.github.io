const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hate Blades",
          description: `Attacks 1 enemy 3 times. Each hit has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nowhere to Run",
          description: `Attacks 1 enemy 3 times. Each hit has a 50% chance of decreasing the target’s Turn Meter by 15%.`,
          damage: "2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Killer's Bile",
          description: `Attacks 1 enemy 2 times. Each hit places a 5% [Poison] debuff on the target for 3 turns.<br><br>Will ignore 10% of the target’s DEF for each [Poison] debuff on the target.`,
          damage: "2.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 465",
        "DEF": "738",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
