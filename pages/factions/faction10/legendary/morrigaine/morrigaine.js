const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Haunt With Hesitation",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shriek of the Banshee",
          description: `Has a 75% chance of stealing all buffs from a target enemy. <br><br>Also has a 75% chance of placing a [True Fear] debuff on all enemies for 1 turn. Will place a 50% [Decrease ACC] debuff for 2 turns instead if the target is a Boss.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Velocimancy",
          description: `Has a 75% chance of decreasing the Turn Meters of all enemies by 20%. <br><br>Fills the Turn Meters of all allies by 20% and places a 30% [Increase SPD] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "She Who Is Death [P]",
          description: `At the start of each turn, places a 100% [Heal Reduction] debuff for 2 turns on the enemy with the lowest HP. This debuff cannot be removed, transferred, spread, or have its duration increased or decreased by enemies or allies.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 068",
        "DEF": "1 189",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
