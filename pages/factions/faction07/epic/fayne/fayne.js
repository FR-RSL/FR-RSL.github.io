const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exotic Blades",
          description: `Attacks 1 enemy 2 times. Each hit has a 35% chance of stealing 5% of the target’s current Turn Meter.`,
          damage: "1.55*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flower's Tears",
          description: `Attacks 1 enemy. Has a 75% chance of placing two 5% [Poison] debuffs and a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "4.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flowing Style",
          description: `Attacks 1 enemy 3 times. The first hit has a 75% chance of placing a 60% [Decrease DEF] debuff for 3 turns. The second hit has a 75% chance of placing a 25% [Weaken] debuff for 3 turns. The third hit heals this Champion by 4% of their MAX HP for every debuff on the target.<br><br><br>Heal Multiplier: 0.04*HP*Target Debuffs`,
          damage: "1.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 663",
        "DEF": "727",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
