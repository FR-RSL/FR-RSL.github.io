const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Temporal Nova",
          description: `Attacks all enemies. Has a 35% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hex of Years",
          description: `Attacks all enemies. Has a 70% chance of placing a 25% [Weaken] debuff for 2 turns. Also has a 45% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Banish From Time",
          description: `Removes [Shield], [Block Damage], and [Unkillable] buffs from all enemies, then attacks them. Places a 100% [Heal Reduction] debuff on all enemies for 2 turns. The buff removal cannot be resisted.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 564",
        "DEF": "1 013",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
