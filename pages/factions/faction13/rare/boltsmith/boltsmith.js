const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Quarrel Cripple",
          description: `Attacks 1 enemy 2 times. Each hit has a 15% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Trained Eye",
          description: `Places a 15% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns. Grants an Extra Turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Piercer Munitions",
          description: `Attacks 1 enemy. Will ignore 30% of the target’s DEF.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 465",
        "DEF": "562",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 20%`,
};
