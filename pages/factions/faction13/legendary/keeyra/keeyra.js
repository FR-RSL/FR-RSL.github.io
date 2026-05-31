const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Falling Star Crush",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Smashing Spree",
          description: `Attacks all enemies. Has a 75% chance of decreasing the duration of all enemy buffs by 1 turn. Also has a 75% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coordinated Defense",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Also places a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Besieger's Bane [P]",
          description: `Whenever an ally is attacked while under an [Ally Protection] buff, places a 50% [Decrease ATK] debuff on the attacker for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "870",
        "DEF": "1 409",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = null;
