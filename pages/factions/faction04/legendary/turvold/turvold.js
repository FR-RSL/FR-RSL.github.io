const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crackling Blade",
          description: `Attacks 1 enemy 2 times. Has a 55% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ancestors' Power",
          description: `Places a 50% [Increase ATK] buff, a 30% [Increase C. RATE] buff and a 30% [Increase SPD] buff on this Champion for 2 turns. Grants an Extra Turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Juggernaut",
          description: `Attacks 1 enemy 2 times. Damage increases according to the number of buffs on this Champion. If the target is killed, resets the cooldown of this skill.`,
          damage: "3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 498",
        "DEF": "914",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 42%`,
};
