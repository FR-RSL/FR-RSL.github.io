const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sun's Kiss",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns. <br><br>Places a 15% [Continuous Heal] buff on this Champion for 1 turn. Also places a 15% [Continuous Heal] buff for 1 turn on the ally with the lowest HP.`,
          damage: "4.1*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Radiant Suffering",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 50% [Decrease ATK] debuff and a [Block Buffs] debuff for 2 turns. Also applies a [Debuff Spread] effect, taking 2 random debuffs from the target and placing them on all enemies.`,
          damage: "5.6*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Desert Fitness",
          description: `Places a 60% [Increase DEF] buff and a 30% [Increase SPD] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Inviolable [P]",
          description: `Removes 1 random debuff from all allies at the start of each turn. <br><br>Removes 2 random debuffs instead from allies under [Continuous Heal] buffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "859",
        "DEF": "1 277",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 70`,
};
