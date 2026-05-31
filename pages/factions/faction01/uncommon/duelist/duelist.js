const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Elan",
          description: `Attacks 1 enemy. Heals by 20% of the damage inflicted.<br><br><br>Heal Multiplier: Damage Dealt*0.2`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Heal +10%", "Level 5: Damage +10%", "Level 6: Damage +15%", "Level 7: Heal +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stunning Slice",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "5.6*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Damage +10%", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 400",
        "ATQ": "1 200",
        "DEF": "793",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
