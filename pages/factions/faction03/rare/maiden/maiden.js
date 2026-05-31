const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Icy Temper",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Diminish",
          description: `Attacks 1 enemy. Destroys the target's MAX HP by 25% of the damage inflicted.`,
          damage: "5.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sow Confusion",
          description: `Attacks 1 enemy. Places a 30% [Decrease DEF] debuff for 2 turns. Places a 30% [Decrease DEF] debuff on all enemies for 2 turns if this attack is critical.`,
          damage: "5.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 730",
        "ATQ": "1 343",
        "DEF": "903",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
