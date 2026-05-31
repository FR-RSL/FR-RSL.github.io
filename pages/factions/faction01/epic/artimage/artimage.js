const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nobleman's Mace",
          description: `Attacks 1 enemy 2 times. The first hit has a 40% chance of placing a 60% [Decrease DEF] debuff for 2 turns. The second hit has a 40% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ring True",
          description: `Removes all debuffs from this Champion, then attacks all enemies.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unshakable Valor",
          description: `Attacks 1 enemy. Will ignore 30% of the target’s DEF. <br><br>Places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns if this attack kills an enemy. These buffs cannot be removed.`,
          damage: "6.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 310",
        "DEF": "1 024",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 20%`,
};
