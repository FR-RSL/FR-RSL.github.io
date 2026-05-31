const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Eviscerate",
          description: `Attacks 1 enemy. Damage increases by 10% for each debuff on the target, stacking up to a maximum of 100%.`,
          damage: "3*ATK*(1+0.1*Target Debuffs)",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blade Dance",
          description: `Attacks all enemies 2 times. Fills the Turn Meter by 10% for each critical hit.`,
          damage: "1.7*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chaos Armor [P]",
          description: `With each hit has a 30% chance of placing a 50% [Decrease ACC] debuff OR a 30% [Decrease SPD] debuff OR a 50% [Decrease ATK] debuff OR a 60% [Decrease DEF] debuff on the target for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 476",
        "DEF": "738",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 30`,
};
