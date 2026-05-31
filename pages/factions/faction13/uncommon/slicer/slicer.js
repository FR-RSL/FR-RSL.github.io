const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Finishing Blow",
          description: `Attacks 1 enemy.<br><br>Decreases the cooldown of the Cut Apart skill by 1 turn if this attack kills an enemy.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cut Apart",
          description: `Attacks 1 enemy.<br><br>Has a 30% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "6.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 090",
        "DEF": "705",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
