const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bushwhack",
          description: `Attacks 1 enemy. Places an extra hit if this attack is critical. The extra hit places a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flailing Pick",
          description: `Attacks all enemies. Each critical hit fills this Champion’s Turn Meter by 7.5%.`,
          damage: "3.3*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Deep Ambush",
          description: `Places a 50% [Increase ACC] buff on all allies for 2 turns, then attacks all enemies. Has a 75% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "3*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Damage +5%", "Level 8: Damage +10%", "Level 9: Buff/Debuff Chance +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 343",
        "DEF": "870",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
