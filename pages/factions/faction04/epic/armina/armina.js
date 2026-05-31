const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Discipline Staff",
          description: `Attacks 1 enemy. Has a 35% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Trampling Rampage",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Steals 7.5% of the Turn Meter from targets under [Decrease DEF] debuffs.`,
          damage: "4.05*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Earsplitter Bellow",
          description: `Decreases the Turn Meters of all enemies by 20%. Has a 75% chance of placing a [Stun] debuff for 1 turn on enemies who have their Turn Meters fully depleted.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Head of Steam [P]",
          description: `Fills this Champion’s Turn Meter by 10% each time an enemy receives a [Stun] debuff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "1 354",
        "DEF": "683",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
