const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Split Apart",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 25% [Weaken] debuff for 1 turn.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Devastate",
          description: `Attacks 1 enemy. Instantly activates the Crack Armor skill if the target is killed by this attack.`,
          damage: "5.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crack Armor",
          description: `Attacks all enemies 3 times. After the first hit, has a 50% chance of placing a 60% [Decrease DEF] debuff on all enemies for 2 turns.`,
          damage: "1.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 398",
        "DEF": "793",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
