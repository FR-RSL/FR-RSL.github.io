const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dual Slash",
          description: `Attacks 1 enemy 2 times. Each critical hit will ignore 5% of the target's DEF.`,
          damage: "1.75*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sword Plunge",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Stun] debuff for 1 turn. Will repeat the attack against all other enemies if this Champion is under an [Increase ATK] buff.`,
          damage: "3.65*ATK (AOE)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Enmeshing Barrage",
          description: `Attacks all enemies. Before attacking, places a 25% [Increase ATK] buff and a 15% [Increase C.DMG] buff on all allies for 2 turns. Each critical hit fills this Champion's Turn Meter by 5%.`,
          damage: "3.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 310",
        "DEF": "727",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 21%`,
};
