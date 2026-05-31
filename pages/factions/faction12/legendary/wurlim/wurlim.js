const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Winds of Winter",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Freeze] debuff for 1 turn. This debuff cannot be resisted.<br><br>Places a [Perfect Veil] buff on the ally with the lowest HP for 2 turns.`,
          damage: "4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frostbite Blast",
          description: `Attacks all enemies. Has a 70% chance of placing a 50% [Decrease ATK] debuff and a 50% [Decrease ACC] debuff for 2 turns. These debuffs cannot be resisted.<br><br>Also places a 30% [Increase C. DMG] buff on all allies for 2 turns.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Icegrave Armor",
          description: `Places a 25% [Strengthen] buff and a 60% [Increase DEF] buff on all allies for 2 turns.<br><br>Has a 60% chance of placing a [Freeze] debuff on all enemies for 1 turn. This debuff cannot be resisted.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 035",
        "DEF": "1 233",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 33%`,
};
