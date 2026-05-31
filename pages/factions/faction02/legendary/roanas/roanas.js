const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bolts of Scorn",
          description: `Attacks 1 enemy. Has an 80% chance of stealing 1 random buff from the target. Has an 80% chance of placing a [Block Buffs] debuff for 1 turn if the target has no active buffs.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Triple Puncture",
          description: `Attacks 1 enemy 3 times. Will ignore [Increase DEF] buffs, [Shield] buffs, and [Block Damage] buffs, as well as 50% of the target's DEF.`,
          damage: "1.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Majesty",
          description: `Attacks all enemies. Has a 75% chance of placing a [Stun] debuff for 1 turn. Decreases each target's Turn Meter by 50% if the [Stun] debuff is not placed.`,
          damage: "3.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 542",
        "DEF": "1 002",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
