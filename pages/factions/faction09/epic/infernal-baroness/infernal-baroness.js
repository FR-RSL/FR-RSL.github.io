const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Life Syphon",
          description: `Attacks all enemies.<br><br>Heals the ally with the lowest HP by 5% of the damage inflicted.<br><br><br>Heal Multiplier: 0.05*Damage Dealt`,
          damage: "2.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Clinging Dark",
          description: `Attacks all enemies.<br><br>Has a 50% chance of placing a 50% [Decrease ATK] debuff on all enemies for 2 turns.`,
          damage: "4.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Disappear",
          description: `Places a [Perfect Veil] buff on an ally for 3 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "914",
        "DEF": "1 211",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
