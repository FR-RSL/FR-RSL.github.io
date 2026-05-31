const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mistress of Mallets",
          description: `Attacks 1 enemy. Fills this Champion’s Turn Meter by 15% if this attack is critical.`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Glory Hound",
          description: `Attacks 1 enemy. Places an extra hit if this attack is critical. Fills the Turn Meters of all allies by 30% if this attack kills an enemy.`,
          damage: "3.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "First to Fight",
          description: `Attacks all enemies. Places a 30% [Increase C. DMG] buff on all allies for 2 turns. Also places a 50% [Increase ATK] buff on all allies for 2 turns if this attack is critical.`,
          damage: "3.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 476",
        "DEF": "859",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
