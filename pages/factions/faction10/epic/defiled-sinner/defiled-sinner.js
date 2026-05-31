const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Murderer's Craft",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns before attacking.<br><br>If 5 or more enemies are alive, does the following attack instead:<br>Attacks all enemies. Places a 25% [Increase ATK] buff on this Champion for 2 turns before attacking.`,
          damage: "3.8*ATKMultiplier: 2.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ripe for Slaughter",
          description: `Attacks 1 enemy. Then attacks all enemies inflicting damage equal to 15% of their MAX HP if the first hit kills an enemy. This second hit cannot be critical.`,
          damage: "6.3*ATKMultiplier: 0.15*Target Max HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Corrosive Smog",
          description: `Attacks all enemies. Damage increases by 10% for each enemy alive. Stacks up to 100%.`,
          damage: "2.9*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "1 222",
        "DEF": "903",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
