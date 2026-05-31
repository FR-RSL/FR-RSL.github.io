const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feed on Suffering",
          description: `Attacks 1 enemy. Heals this Champion by 15% of the damage inflicted.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Freakish Resilience",
          description: `Heals this Champion by 30% of their MAX HP and places a 30% [Increase DEF] buff on this Champion for 2 turns.<br><br><br>Heal Multiplier: 0.3*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Soul Possession",
          description: `Exchanges remaining HP levels with a target enemy, then equalizes the HP of all allies.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "793",
        "DEF": "1 189",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
