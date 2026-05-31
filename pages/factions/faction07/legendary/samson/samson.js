const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vanity Fists",
          description: `Attacks 1 enemy 2 times. Each hit has a 35% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "0.12*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Explosive Temper",
          description: `Attacks all enemies. Removes all [Increase DEF] buffs from enemies before attacking. Places an extra hit if this attack kills an enemy.`,
          damage: "0.29*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Roar of Victory",
          description: `Places a 50% [Increase ACC] buff on all allies for 3 turns. Also places a 30% [Increase C. DMG] buff on this Champion for 3 turns, then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Affronted [P]",
          description: `Decreases the damage this Champion receives from critical hits by 20%. Counterattacks the attacker when hit with a critical hit.<br><br>Has a 50% chance of counterattacking the attacker when hit with a strong, normal or weak hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "815",
        "DEF": "1 255",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 30%`,
};
