const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bonebreaker",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.8*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spreading Ice",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Freeze] debuff for 1 turn. If the target has a [Freeze] debuff, has a 25% chance of placing it on another enemy.`,
          damage: "6*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tower of Power [P]",
          description: `Increases the resistance of all allies by 15 for each active buff on this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "859",
        "DEF": "1 200",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Magic Ally ATK in All Battles by 20%`,
};
