const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brush Choppers",
          description: `Attacks 1 enemy. Has a 15% chance of placing an extra hit.`,
          damage: "2.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crown Breaker",
          description: `Attacks 1 enemy. Will ignore [Shield] and [Block Damage] buffs. Places a [Block Damage] buff on this Champion for 1 turn if this attack kills an enemy.`,
          damage: "5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ancient Rage",
          description: `Places a 30% [Increase C. DMG] buff and a 50% [Increase ATK] buff on this Champion for 3 turns, then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Assassin of Kings [P]",
          description: `Whenever this Champion kills an enemy, decreases the cooldown of the Crown Breaker skill by 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 421",
        "DEF": "914",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
