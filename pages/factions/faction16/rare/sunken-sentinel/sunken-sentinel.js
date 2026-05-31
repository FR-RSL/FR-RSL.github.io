const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Restorative Slash",
          description: `Attacks 1 enemy. Places an extra hit if the target is under a [Decrease DEF] debuff.`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sunken Swords",
          description: `Attacks all enemies. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns. The chance increases by 5% for each alive ally.`,
          damage: "3.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Defender of Agaris",
          description: `Attacks 1 enemy. Heals this Champion by 20% of the damage inflicted. Heals this Champion by 30% instead if the target is under a [Decrease DEF] debuff.<br><br>Destroys the target's MAX HP by 20% of the damage inflicted. Destroys the target's MAX HP by 30% instead if the target is under a [Decrease DEF] debuff.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 277",
        "DEF": "925",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in all battles by 15%`,
};
