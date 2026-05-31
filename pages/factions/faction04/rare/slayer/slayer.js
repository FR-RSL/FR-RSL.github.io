const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vicious Strike",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frost Burst",
          description: `Attacks all enemies.`,
          damage: "4.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Debilitate",
          description: `Attacks 1 enemy. Places a 5% [Poison] debuff for 2 turns. Has a 75% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "6.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 233",
        "DEF": "749",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
