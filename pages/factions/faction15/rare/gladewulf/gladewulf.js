const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Phantom Pack",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit has a 35% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "DEF*1.05",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ghostly Roots",
          description: `Attack all enemies. <br><br>Has a 50% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "DEF*3",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Arooo!",
          description: `Places a [Counterattack] buff on this Champion for 2 turns. Also places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Safety in Numbers [P]",
          description: `Decreases the damage this Champion receives by 5% for each ally under an [Ally Protection] buff placed by this Champion.`,
          isPassive: true
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
