const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Void Gaze",
          description: `Attacks all enemies. Has a 15% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "2.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Abyssal Renewal",
          description: `Heals all allies by 15% of their MAX HP.<br><br><br>Heal Multiplier: 0.15*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +10%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wards of Madness",
          description: `Places a 30% [Increase DEF] buff and a 25% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "815",
        "DEF": "991",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 16%`,
};
