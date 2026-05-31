const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hellblight",
          description: `Attacks 1 enemy. Has a 5% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flesh Knit",
          description: `Heals an ally by 10% of their MAX HP.<br><br><br>Heal Multiplier: 0.1*Target Max HP`,
          cooldown: 3,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +10%", "Level 6: Heal +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "925",
        "DEF": "903",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
