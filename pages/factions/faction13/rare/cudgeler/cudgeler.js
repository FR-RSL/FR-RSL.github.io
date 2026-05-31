const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "The Harder They Fall",
          description: `Attacks 1 enemy 2 times. Has an additional 30% chance of inflicting a critical hit if the target is under a [Decrease DEF] debuff.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soften Them Up",
          description: `Places a [Counterattack] and a 25% [Increase ATK] buff on this Champion for 2 turns. Grants an Extra Turn.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Furious Defense [P]",
          description: `Has a 20% chance of placing a 30% [Decrease DEF] debuff for 2 turns when attacking targets with higher DEF than this Champion. Has a 20% chance of decreasing the damage taken by 20% when attacked by enemies with higher ATK than this Champion.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 178",
        "DEF": "903",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
