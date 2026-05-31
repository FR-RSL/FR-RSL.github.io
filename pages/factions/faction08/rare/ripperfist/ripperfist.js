const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mangler Gauntlet",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "1.46*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%", "Level 7: Damage +5%", "Level 8: Buff/Debuff Chance +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rip to Shreds",
          description: `Attacks 1 enemy 3 times. Each hit places a 100% [Heal Reduction] debuff for 2 turns if this Champion has full HP. Each hit places a 50% [Heal Reduction] debuff for 2 turns if this Champion has less than 100% HP.`,
          damage: "1.15*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bloody Mess [P]",
          description: `Places a 25% [Increase ATK] buff on this Champion for 1 turn and decreases the cooldown of the Rip to Shreds skill every time this Champion’s HP drops below 50%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 398",
        "DEF": "738",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
