const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ichor Sickles",
          description: `Attacks 1 enemy 2 times. Each hit has a 20% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wasting Affliction",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Languish",
          description: `Attacks 1 enemy. Has a 75% chance of decreasing the duration of all buffs on the target by 1 turn.<br><br>Also has a 75% chance of increasing the duration of all debuffs on the target by 1 turn.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Venom for Blood [P]",
          description: `Heals this Champion by 3% of their MAX HP whenever an enemy receives damage from a [Poison] debuff.<br><br>Heal Multiplier: 0.03*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 354",
        "DEF": "980",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
