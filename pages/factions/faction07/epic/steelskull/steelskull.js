const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Decay",
          description: `Attacks 1 enemy 2 times. Has a 10% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cleansing Spell",
          description: `Removes all debuffs from a target ally, then heals them by 40%.<br><br><br>Heal Multiplier: 0.4*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Protection",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns. Heals all allies by 20% of their MAX HP.<br><br><br>Heal Multiplier: 0.2*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 277",
        "DEF": "958",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 27%`,
};
