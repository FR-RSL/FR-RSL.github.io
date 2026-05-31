const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Multiply Misery",
          description: `Attacks 1 enemy. Has a 40% chance of transferring 1 random debuff from this Champion to the target.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Warleader",
          description: `Heals all allies by 30% of their MAX HP. Increases the duration of all ally buffs by 1 turn.<br><br><br>Heal Multiplier: 0.3*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lay Low",
          description: `Attacks all enemies. Decreases the duration of all enemy buffs by 1 turn. Increases the duration of all enemy debuffs by 1 turn.`,
          damage: "3.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "991",
        "DEF": "1 079",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 27%`,
};
