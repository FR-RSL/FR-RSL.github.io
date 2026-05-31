const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Admonish",
          description: `Attacks 1 enemy. Has a 15% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "5.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Divine Light",
          description: `Heals a target ally by 20% of their MAX HP. Heals all allies except the target by 10% of the target's MAX HP.<br><br><br>Heal Multiplier: 0.2*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bless Weapons",
          description: `Places a 25% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "683",
        "DEF": "1 134",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
