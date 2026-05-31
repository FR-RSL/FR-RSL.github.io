const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sly Slice",
          description: `Attacks 1 enemy. Has a 30% chance of stealing 1 random buff from the target.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flying Daggers",
          description: `Attacks 4 times at random. Each hit has a 50% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "1.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vicious Partner",
          description: `Places a 50% [Increase ATK] and a 30% [Increase C. RATE] buff on this Champion for 2 turns. Grants an Extra Turn when Seducer is on the same team.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 565",
        "ATQ": "1 343",
        "DEF": "914",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
