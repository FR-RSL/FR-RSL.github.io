const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thunder",
          description: `Attacks 1 enemy. Has a 15% chance of placing a 25% [Decrease ACC] debuff for 1 turn.`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spiritual Wind",
          description: `Places a 60% [Increase DEF] buff on a target ally for 2 turns. Heals the target by 20% of their MAX HP.<br><br><br>Heal Multiplier: 0.2*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Cooldown -1", "Level 5: Heal +10%", "Level 6: Heal +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "903",
        "DEF": "936",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
