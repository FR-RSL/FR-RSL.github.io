const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Kanabo Jutsu",
          description: `Attacks 1 enemy. Has a 15% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Reckless Sweep",
          description: `Attacks all enemies. Has a 50% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.2*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Roaring Challenge",
          description: `Has a 50% chance of placing a [Provoke] debuff for 1 turn.<br><br>Places a [Shield] buff on this Champion for 2 turns equal to 20% of their MAX HP. Also places a 15% [Reflect Damage] buff on all allies except this Champion for 2 turns.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "749",
        "DEF": "826",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 15%`,
};
