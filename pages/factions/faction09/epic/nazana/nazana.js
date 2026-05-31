const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dark Lance",
          description: `Attacks all enemies.`,
          damage: "2.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Unholy Contract",
          description: `Places a 50% [Ally Protection] buff on all allies for 2 turns. Places a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is equal to 40% of this Champion's MAX HP.<br><br><br>Shield Multiplier: 0.4*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Steel Breaker",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "859",
        "DEF": "1 013",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 28%`,
};
