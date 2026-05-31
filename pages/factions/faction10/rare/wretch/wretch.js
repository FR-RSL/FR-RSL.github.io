const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crypt Touch",
          description: `Attacks 1 enemy 2 times. Has a 20% chance of placing a 50% [Heal Reduction] debuff for 2 turns.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lifeleech",
          description: `Attacks 1 enemy. Heals this Champion by 15% of damage inflicted.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gravefire",
          description: `Attacks 1 enemy. Places a [HP Burn] debuff for 2 turns.`,
          damage: "4.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 432",
        "DEF": "716",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Force Ally ATK in All Battles by 30%`,
};
