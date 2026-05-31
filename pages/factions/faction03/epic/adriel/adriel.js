const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Humiliate",
          description: `Attacks 1 enemy. Has a 20% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "4.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Curtain of Light",
          description: `Heals all allies by 20% of their MAX HP and places a 30% [Reflect Damage] buff on them for 2 turns.<br><br><br>Heal Multiplier: 0.2*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blinding Flash",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Has a 100% chance if this attack is critical.`,
          damage: "3.25*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "1 101",
        "DEF": "980",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Magic Ally SPD in All Battles by 21%`,
};
