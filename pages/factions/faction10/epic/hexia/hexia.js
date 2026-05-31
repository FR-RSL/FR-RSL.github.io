const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grave Rot",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 60% [Decrease DEF] debuff for 2 turns. This chance increases by 20% for each debuff placed on this Champion.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soulreap",
          description: `Attacks 1 enemy. Grants an Extra Turn and places a 50% [Increase ATK] buff on this Champion for 2 turns if this attack kills an enemy. Damage increases by 7.5% for each debuff on this Champion. Stacks up to 30%.`,
          damage: "5.3*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Spirit Harvest",
          description: `Attacks 1 enemy. Heals this Champion by 15% of the damage inflicted. The heal increases by 10% for each debuff on this Champion. Places a 30% [Increase SPD] buff on this Champion for 2 turns.<br><br><br>Heal Multiplier: (0.15+0.1*Target Debuffs)*Damage Dealt`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 564",
        "DEF": "793",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 27%`,
};
