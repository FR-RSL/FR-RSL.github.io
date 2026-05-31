const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Numbing Arrows",
          description: `Attacks 1 enemy. Has a 35% chance of placing a 25% [Decrease ACC] debuff for 2 turns. Places an extra hit if the target is under a [Decrease ACC] debuff.`,
          damage: "2.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Foul Festering",
          description: `Attacks 1 enemy. Has a 45% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "3.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cryptfire",
          description: `Attacks 3 times at random. Has a 30% chance of placing a [HP Burn] debuff for 2 turns.`,
          damage: "1.25*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 443",
        "DEF": "760",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
