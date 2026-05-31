const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Whammy",
          description: `Attacks 1 enemy 2 times. The first hit has a 30% chance of placing a 25% [Weaken] debuff for 2 turns. The second hit has a 30% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "1.8*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vigor Explosion",
          description: `Attacks all enemies. <br><br>Removes 1 random debuff from all allies before attacking. Damage increases by 5% for each debuff removed.`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wall of Muscle",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. <br><br>Places a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Shrug Off [P]",
          description: `Whenever this Champion is attacked, has a 20% chance of decreasing the duration of all debuffs on this Champion by 1 turn.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "749",
        "DEF": "1 332",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
