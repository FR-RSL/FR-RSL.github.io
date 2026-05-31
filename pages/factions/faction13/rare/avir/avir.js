const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flask of Vitreol",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "4.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Corroding Catalyst",
          description: `Attacks all enemies. Has a 50% chance of placing a 25% [Decrease ATK] debuff for 2 turns. Also places a 15% [Decrease SPD] debuff for 1 turn on targets under [Poison] debuffs.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Buff/Debuff Chance +20%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vitalizing Potions",
          description: `Fills the Turn Meters of all allies by 15% and heals all allies by 15% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.15*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "881",
        "DEF": "1 035",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
