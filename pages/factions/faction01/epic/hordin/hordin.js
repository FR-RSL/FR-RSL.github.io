const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Relentless Strike",
          description: `Attacks 1 enemy 2 times. Grants an Extra Turn if the target is killed.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bloodletter",
          description: `Attacks 1 enemy. Has a 60% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Heals this Champion by 10% of the damage inflicted.<br><br><br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "6.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Burning Hatred",
          description: `Places a 50% [Increase ATK] buff, a 30% [Increase C. RATE] buff, and a 30% [Increase SPD] buff on this Champion for 2 turns. Grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 321",
        "DEF": "859",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 20%`,
};
