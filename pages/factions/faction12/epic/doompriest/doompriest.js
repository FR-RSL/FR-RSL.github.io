const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fate Weave",
          description: `Attacks 1 enemy. If the hit is critical, places a 15% [Increase C. RATE] buff on a random ally for 2 turns.`,
          damage: "4.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mass Possession",
          description: `Places a 50% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bolster [P]",
          description: `Heals all allies by 7.5% of their HP and removes 1 random debuff from them at the start of this Champion's turn.<br><br>Heal Multiplier: 0.075*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "980",
        "DEF": "1 035",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Force Ally SPD in All Battles by 15%`,
};
