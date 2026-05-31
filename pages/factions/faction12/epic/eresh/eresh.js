const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Meticulous Adversary",
          description: `Attacks 1 enemy 2 times. Each hit has a 25% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blur of Knives",
          description: `Attacks all enemies. Has a 20% chance of granting an Extra Turn. If an Extra Turn is not granted, fills this Champion’s Turn Meter by 10% for each living enemy instead.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Deathrite Evocation",
          description: `Places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 3 turns, then grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Slip Between [P]",
          description: `Places a [Perfect Veil] buff on this Champion for 2 turns whenever their HP drops below 50%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 365",
        "DEF": "936",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
