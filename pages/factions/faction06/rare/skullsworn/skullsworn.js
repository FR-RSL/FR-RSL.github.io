const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vicious Rip",
          description: `Attacks 1 enemy 2 times. Has a 20% chance of placing an extra hit.`,
          damage: "1.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cry For Blood",
          description: `Places a 30% [Increase SPD] buff on this Champion for 2 turns. Also places a [Counterattack] buff on this Champion for 2 turns.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Feral Hunter [P]",
          description: `Fills this Champion's Turn Meter by 15% on critical hits. Fills this Champion's Turn Meter by 50% if this Champion kills an enemy.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 365",
        "DEF": "815",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 13%`,
};
