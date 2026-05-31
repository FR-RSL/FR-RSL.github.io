const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hermit Cudgel",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.85*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sustained Beating",
          description: `Attacks all enemies. Has a 50% chance of placing a [Stun] debuff for 1 turn. Decreases the Turn Meters of enemies under [Stun] debuffs by 15%.`,
          damage: "4.1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +25%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unfaze",
          description: `Removes all [Stun] debuffs from all allies, then places a 60% [Increase DEF] buff and a 25% [Increase RES] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Finish the Foe [P]",
          description: `Immune to [Stun] debuffs. <br><br>Increases the damage inflicted by all allies by 15% when attacking enemies under [Stun] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "804",
        "DEF": "1 321",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 30%`,
};
