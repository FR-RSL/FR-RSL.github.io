const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sickle Sweep",
          description: `Attacks all enemies. Has a 40% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "2.65*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Heart Pierce",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 30% [Decrease C.RATE] debuff and a [Leech] debuff for 2 turns.`,
          damage: "4.7*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shadow Ambush",
          description: `Places a 50% [Increase ATK] buff on all allies for 2 turns, then attacks 1 enemy. Fills the Turn meters of all allies by 20% if this attack is critical.`,
          damage: "4.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "False Death [P]",
          description: `Revives a random ally with 30% HP whenever this Champion kills an enemy. <br><br>Has a 50% chance of placing a [Fear] debuff on all enemies for 1 turn whenever an ally is revived.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 222",
        "DEF": "1 090",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
