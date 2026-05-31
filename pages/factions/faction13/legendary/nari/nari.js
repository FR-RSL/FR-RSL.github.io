const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wee Filcher",
          description: `Attacks 1 enemy. Has a 50% chance of stealing 1 random buff from the target.`,
          damage: "2.1*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rainbow of Woe",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ACC] debuff and a 50% [Decrease RES] debuff for 2 turns.`,
          damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Irresistible Wealth",
          description: `Attacks all enemies. Has a 75% chance of placing a [Provoke] debuff for 1 turn. Also places a [Counterattack] buff on this Champion for 2 turns.`,
          damage: "3.7*DEF",
          cooldown: 6,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Joyful Song [P]",
          description: `At the start of this Champion's turn, transfers 1 random buff from a random enemy to a random ally. <br><br>This Champion’s ACC is increased by 5 for each buff on each ally.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "804",
        "DEF": "1 487",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = null;
