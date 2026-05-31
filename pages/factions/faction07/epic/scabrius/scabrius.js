const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gutter Knife",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gnawing Horde",
          description: `Attacks all enemies. Has a 75% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "4.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vicious Spite",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 25% [Weaken] debuff for 2 turns. <br><br>Also places a 50% [Increase ATK] buff on this Champion for 2 turns if the [Weaken] debuff is placed.`,
          damage: "6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Verminous [P]",
          description: `Damage increases by 20% when attacking enemies under [Poison] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 365",
        "DEF": "1 057",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
