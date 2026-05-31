const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Superheated Hammer",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [HP Burn] debuff for 2 turns.<br><br>[Heals this Champion by 20% of the damage inflicted when Atur is on the same team.]<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Curse of Nullity",
          description: `Attacks all enemies. Has a 75% chance of placing a 100% [Heal Reduction] debuff for 2 turns.<br><br>[Heals this Champion by 10% of the damage inflicted when Atur is on the same team.]<br><br><br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flame Tempest",
          description: `Attacks 3 times at random. Each hit places a [HP Burn] debuff for 2 turns.<br> <br>[Heals this Champion by 15% of the damage inflicted when Atur is on the same team.]<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 597",
        "DEF": "848",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 25%`,
};
