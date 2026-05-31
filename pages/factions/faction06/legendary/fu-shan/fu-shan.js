const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Howl",
          description: `Attacks 1 enemy. Has a 25% chance of placing an extra hit.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frightful Claws",
          description: `Attacks all enemies 2 times. Each hit has a 20% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +15%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shred",
          description: `Attacks 4 times at random. Each hit has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1", "Level 4: Buff/Debuff Chance +25%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 443",
        "DEF": "1 024",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 24%`,
};
