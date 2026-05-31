const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spore Stick",
          description: `Attacks 1 enemy 2 times. Each hit has a 15% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Erupting Growths",
          description: `Attacks 1 enemy 2 times. Each hit has a 75% chance of instantly activating one 5% [Poison] debuff on the target.`,
          damage: "0.2*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "The Colony Expands",
          description: `Attacks all enemies. Has a 50% chance of placing two 5% [Poison] debuffs and a 25% [Poison Sensitivity] debuff for 2 turns. Heals this Champion by 1% of their MAX HP for each [Poison] debuff placed by this skill.<br><br><br>Heal Multiplier: 0.01*HP`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mycelium [P]",
          description: `Whenever a [Poison] debuff is activated on an enemy, increases this Champion’s HP and DEF by 5%. Stacks up to 25%. Resets each round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "760",
        "DEF": "1 189",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
