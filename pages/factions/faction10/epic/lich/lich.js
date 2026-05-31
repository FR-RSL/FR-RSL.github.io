const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Curse of Blindness",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cocoon",
          description: `Places a 60% [Increase DEF] buff on this Champion for 2 turns. Heals this Champion by 20% of their MAX HP.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Enervation",
          description: `Attacks 1 enemy. Decreases the target's Turn Meter by 100%. Places a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "5.3*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "694",
        "DEF": "1 376",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 27%`,
};
