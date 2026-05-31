const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hook",
          description: `Attacks 1 enemy. Has a 60% chance of placing a [Provoke] debuff for 1 turn if this attack is critical.`,
          damage: "2.6*ATK+2*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Glaive Swing",
          description: `Attacks all enemies. Has a 50% chance of placing a 25% [Decrease ATK] debuff for 2 turns. Has a 50% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "4.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Regeneration [P]",
          description: `Heals this Champion by 10% HP at the start of their turn. This Heal can be critical.<br><br>Heal Multiplier: 0.1*HP`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "914",
        "DEF": "859",
        "VIT": "86",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Faction Wars by 30`,
};
