const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Redoubled Effort",
          description: `Attacks 1 enemy 2 times.`,
          damage: "1.85*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shining Sword",
          description: `Removes one random debuff from this Champion, then attacks 1 enemy. Heals this Champion by 25% of the damage inflicted.<br><br><br>Heal Multiplier: 0.25*Damage Dealt`,
          damage: "5.58*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Battlefield Grace",
          description: `Attacks 1 enemy. Places a 15% [Increase SPD] buff on all allies for 2 turns if this attack kills an enemy.`,
          damage: "6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 255",
        "DEF": "914",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
