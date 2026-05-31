const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fireball",
          description: `Attacks 1 enemy. Has a 15% chance of placing an extra hit.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lightning",
          description: `Places a 30% [Increase C. RATE] buff on this Champion for 2 turns, then attacks 1 enemy.`,
          damage: "5.5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ice Bolt",
          description: `Attacks 1 enemy. Will ignore [Shield] and [Block Damage] buffs as well as DEF.`,
          damage: "3*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 398",
        "DEF": "738",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 21%`,
};
