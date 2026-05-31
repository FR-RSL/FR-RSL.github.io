const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shadowbow",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 25% [Decrease ATK] debuff for 1 turn.`,
          damage: "3.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Swift Warband",
          description: `Attacks all enemies. Places a 15% [Increase SPD] buff on all allies for 2 turns.`,
          damage: "3.6*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Diversion",
          description: `Places a [Veil] buff on all allies except this Champion for 1 turn. <br><br>Also places a [Shield] buff on all allies for 2 turns equal to 20% of this Champion's MAX HP.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Camo Cover [P]",
          description: `Decreases the damage received from skills by all allies under [Veil] or [Perfect Veil] buffs by 5%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "793",
        "DEF": "1 233",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
