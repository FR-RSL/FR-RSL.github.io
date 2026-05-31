const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Slippery Strike",
          description: `Attacks 1 enemy. Will ignore [Block Damage] and [Shield] buffs.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Withering Poison",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 30% [Decrease DEF] debuff for 2 turns. Places a 50% [Heal Reduction] debuff for 2 turns if the target has a [Decrease DEF] debuff.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Catalyze",
          description: `Attacks 1 enemy. The hit is critical if the target has a [Heal Reduction] debuff.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 310",
        "DEF": "826",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Magic Ally ATK in All Battles by 30%`,
};
