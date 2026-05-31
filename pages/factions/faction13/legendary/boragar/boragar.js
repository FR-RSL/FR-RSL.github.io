const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Antique Staff",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Increase DEF] buff for 1 turn on the ally with the lowest HP. Will not be placed on this Champion. Has a 100% chance instead if this attack is critical.`,
          damage: "0.3*HP",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Souls of Old Stone",
          description: `Removes 1 random debuff from all allies, then places a [Shield] buff on all allies for 2 turns equal to 20% of this Champion’s MAX HP.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +10%", "Level 5: Shield +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rune of Energy",
          description: `Places a 50% [Increase RES] buff and a 30% [Increase SPD] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Boragar's Blazon [P]",
          description: `Allies receive 10% less damage from Champions whose RES is lower than or equal to theirs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 135",
        "ATQ": "925",
        "DEF": "1 244",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 50`,
};
