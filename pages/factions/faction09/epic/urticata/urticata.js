const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mephitic Spines",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of increasing the duration of 2 [Poison] debuffs by 1 turn.`,
          damage: "1.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poison Agonist",
          description: `Attacks 1 enemy 3 times. Each hit has a 30% chance of placing a 25% [Poison Sensitivity] debuff for 2 turns.`,
          damage: "1.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wretched Nexus",
          description: `Attacks 4 times at random. Each hit has a 50% chance of placing a [Hex] debuff for 2 turns.`,
          damage: "1.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blood Borne [P]",
          description: `Whenever either this Champion or an ally lands a critical hit on an enemy under a [Hex] debuff, has a 10% chance of placing a 5% [Poison] debuff on the enemy for 1 turn.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 409",
        "DEF": "1 057",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 15%`,
};
