const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Head Crack",
          description: `Attacks 1 enemy. <br><br>Has a 35% chance of placing a 25% [Decrease ACC] debuff for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Woundspiller Herbs",
          description: `Attacks all enemies. <br><br>Has a 50% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "3.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Grace of the Glen",
          description: `Places a [Block Debuffs] buff on all allies for 1 turn. <br><br>Fills the Turn Meters of all allies by 15%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 057",
        "DEF": "914",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
