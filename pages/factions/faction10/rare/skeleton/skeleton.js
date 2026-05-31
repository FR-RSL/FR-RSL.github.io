const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sorcerous Bones",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "3.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tomb Blight",
          description: `Attacks 1 enemy. Has an 80% chance of placing a [Block Active Skills] debuff for 1 turn. Also has an 80% chance of placing a 50% [Heal Reduction] debuff for 2 turns.`,
          damage: "5.6*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rusted Targe",
          description: `Attacks 1 enemy. Places a 30% [Increase DEF] buff on this Champion for 2 turns.`,
          damage: "5.4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "683",
        "DEF": "1 178",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
