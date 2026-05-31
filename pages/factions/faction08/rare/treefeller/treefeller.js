const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pruning Limbs",
          description: `Attacks 1 enemy.<br><br>Has a 35% chance of placing a 25% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chop Down",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit has a 50% chance of placing a 2.5% [Poison] debuff for 2 turns. Each hit also has a 50% chance to place a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "2.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blasting Powder",
          description: `Attacks 2 times at random.<br><br>Each hit has a 70% chance of placing a [Bomb] debuff that detonates after 3 turns.<br><br><br>Bomb Multiplier:`,
          damage: "3.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 277",
        "DEF": "870",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
