const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fearsome Slice",
          description: `Attacks 1 enemy.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chop Apart",
          description: `Attacks 1 enemy 2 times. Has a 25% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "2.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Killing Zeal",
          description: `Places a 15% [Increase C. RATE] buff and a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is proportional to this Champion's DEF and C. DMG. Grants an Extra Turn.<br><br><br>Shield Multiplier: 2*ATK*(1+CRD)`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 332",
        "DEF": "826",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 17%`,
};
