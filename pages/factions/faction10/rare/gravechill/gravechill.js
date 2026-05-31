const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Freezing Toxin",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 5% [Poison] debuff for 1 turn.`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blood Chill",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 30% [Decrease DEF] debuff for 2 turns. Has a 75% chance of placing a 60% [Decrease DEF] debuff instead if the target is under a [Poison] debuff.`,
          damage: "6.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Icy Veins",
          description: `Attacks 1 enemy 2 times.Each hit places a 2.5% [Poison] debuff for 2 turns. Places a 5% [Poison] debuff instead if the target is under a [Poison Sensitivity] debuff.`,
          damage: "2.65*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 233",
        "DEF": "892",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
