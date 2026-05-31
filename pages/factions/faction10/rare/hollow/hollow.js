const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bleed Away",
          description: `Attacks 1 enemy. Has a 10% chance of placing a 2.5% [Poison] debuff for 2 turns.`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Creeping Dark",
          description: `Attacks 1 enemy 4 times. Each hit decreases the target's Turn Meter and fills this Champion's Turn Meter by 5%.`,
          damage: "1.2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Aether Strike",
          description: `Attacks 1 enemy. Will ignore 25% of the target's DEF.`,
          damage: "4.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 299",
        "DEF": "859",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 21%`,
};
