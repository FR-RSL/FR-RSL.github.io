const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Binding Arrows",
          description: `Attacks 1 enemy 2 times. Has a 35% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Thrill of the Hunt",
          description: `Attacks 1 enemy 2 times. Heals this Champion by 50% of the damage inflicted on each critical hit.<br><br><br>Heal Multiplier: Damage Dealt*0.5`,
          damage: "2.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Big Game",
          description: `Attacks all enemies. Damage increases according to enemy MAX HP.`,
          damage: "0.02*Target Max HP+3*ATK",
          cooldown: 7,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 365",
        "DEF": "815",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 17%`,
};
