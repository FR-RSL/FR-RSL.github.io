const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Savagery",
          description: `Attacks 1 enemy. Attacks 2 times if the target's HP percentage is higher than this Champion's.`,
          damage: "3.8*ATKMultiplier: 3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Carnage",
          description: `Attacks all enemies. Has a 25% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dominate",
          description: `Attacks 1 enemy. Has a 60% chance of placing a [Stun] debuff for 1 turn. Also has a 60% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "6.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +20%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +20%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 156",
        "DEF": "925",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 13%`,
};
