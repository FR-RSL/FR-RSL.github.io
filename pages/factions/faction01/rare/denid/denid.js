const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Skull Mangler",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Boomstick",
          description: `Attacks all enemies. Places a 25% [Strengthen] buff on all allies for 2 turns.`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pig-Headed [P]",
          description: `Places a [Shield] buff on this Champion for 2 turns, equal to 10% of this Champion’s MAX HP, when hit by an enemy under a [Provoke] debuff.<br><br>Shield Multiplier: 0.1*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "804",
        "DEF": "1 222",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
