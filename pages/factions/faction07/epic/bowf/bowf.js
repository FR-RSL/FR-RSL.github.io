const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Reekblade",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 25% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "0.13*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spearstench",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a 50% [Decrease ACC] debuff on all enemies for 2 turns. <br><br>Also increases the duration of all ally buffs by 1 turn.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +15%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Healing Spritz",
          description: `Removes 2 random debuffs from all allies, and heals them by 10% of their MAX HP. <br><br>Also places a 50% [Increase ACC] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.10*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Antibiotic Spray [P]",
          description: `Decreases the damage all allies receive from [Poison] debuffs by 50%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "936",
        "DEF": "1 123",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
