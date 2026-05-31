const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thorned Riposte",
          description: `Attacks 1 enemy 3 times. Each hit has a 20% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "1.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Treeshield's Favor",
          description: `Heals all allies by 15% of their MAX HP. <br><br>Also places a 30% [Increase DEF] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.15*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Root Rejuvenation",
          description: `Revives 2 random allies with 25% HP and 25% Turn Meter. <br><br>Also places a [Shield] buff on all revived allies for 2 turns, equal to 20% of their MAX HP.<br><br><br>Shield Multiplier: 0.2*Target Max HP`,
          cooldown: 7,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "947",
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
  description: `Increases Ally SPD in Faction Wars by 15%`,
};
