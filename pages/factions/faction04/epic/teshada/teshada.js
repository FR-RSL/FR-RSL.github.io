const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Savage Fury",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          damage: "3.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maximum Carnage",
          description: `Attacks 3 times at random. Each hit has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Spirit Appeasement",
          description: `Revives an ally with 40% HP and 40% Turn Meter, then heals all allies by 15% of their MAX HP.<br><br><br>Heal Multiplier: 0.15*Target Max HP`,
          cooldown: 3,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "826",
        "DEF": "1 387",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 20%`,
};
