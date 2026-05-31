const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Curse",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 25% [Decrease ACC] debuff for 2 turns.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dark Embrace",
          description: `Heals all allies by 15% of their MAX HP.<br><br><br>Heal Multiplier: 0.15*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wings of Doom",
          description: `Places a 30% [Increase C. RATE] buff and a 15% [Increase SPD] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "914",
        "DEF": "1 013",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 13%`,
};
