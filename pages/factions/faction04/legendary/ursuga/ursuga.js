const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gigantic Cudgel",
          description: `Attacks 1 enemy. Has a 45% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barrel Through",
          description: `Attacks all enemies. Places a 25% [Decrease C. DMG] debuff and a 50% [Decrease ATK] debuff for 2 turns on targets whose ATK is higher than their DEF. Places a 30% [Decrease SPD] debuff and a 60% [Decrease DEF] debuff for 2 turns on targets whose ATK is equal to or lower than their DEF.`,
          damage: "0.23*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bottoms Up",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 3 turns. Places a 25% [Strengthen] buff on this Champion for 3 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Golden Guard [P]",
          description: `Decreases the damage all allies receive from critical hits by 30%. This Champion will receive that damage instead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 460",
        "ATQ": "485",
        "DEF": "1 531",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
