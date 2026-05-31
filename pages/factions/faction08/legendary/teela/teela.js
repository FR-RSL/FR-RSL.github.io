const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hexdrinker Scimitar",
          description: `Attacks 1 enemy. Steals 1 random buff from the target. Also has a 50% chance of stealing another random buff if the target is under 2 or more buffs.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pyre Strike",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff for 2 turns. <br><br>Also places a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          damage: "0.22*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +20%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Life Worm",
          description: `Attacks all enemies. Has an 85% chance of increasing the duration of all [HP Burn] debuffs on all enemies by 1 turn.<br><br>Also has an 85% chance of placing a [Leech] debuff and a [Hex] debuff for 2 turns.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "892",
        "DEF": "1 222",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 50`,
};
