const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Breath Taker",
          description: `Attacks 1 enemy 2 times. Places a 50% [Increase ATK] buff on this Champion for 2 turns if this attack kills an enemy.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mortify",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sword of Loss",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Block Buffs] debuff and a [Block Active Skills] debuff for 2 turns. This attack is always critical.`,
          damage: "6.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Great Cycle [P]",
          description: `Revives 1 random ally with 50% HP every time this Champion kills an enemy.`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 365",
        "DEF": "837",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 30%`,
};
