const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bring Silence",
          description: `Attacks 3 times at random. Each hit has a 30% chance of placing a [Sleep] debuff for 1 turn.`,
          damage: "1.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flowing Sword",
          description: `Attacks 1 enemy. Has a 70% chance of decreasing the target's Turn Meter by 50%. Fills this Champion's Turn Meter equal to the amount the target loses.`,
          damage: "6.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Copious Bleed",
          description: `Attacks all enemies. Has an 80% chance of placing a 50% [Heal Reduction] debuff for 1 turn.`,
          damage: "3.8*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 134",
        "DEF": "980",
        "VIT": "96",
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
