const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hoodoo",
          description: `Attacks 2 times at random. Has a 15% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "2.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soul Sizzle",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of placing two 2.5% [Poison] debuffs for 2 turns.`,
          damage: "3.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Envelop",
          description: `Places a [Shield] buff on all allies equal to 20% of their HP and a 15% [Reflect Damage] buff on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.2*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "859",
        "DEF": "1 189",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Spirit Ally HP in All Battles by 19%`,
};
