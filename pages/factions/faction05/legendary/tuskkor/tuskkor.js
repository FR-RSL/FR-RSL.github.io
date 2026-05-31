const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Foe Mangler",
          description: `Attacks 1 enemy 2 times. <br><br>Has a 25% chance of granting an Extra Turn.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hatchet Barrage",
          description: `Attacks all enemies. The damage inflicted by this skill increases by 10% for each buff on this Champion. <br><br>Decreases the cooldown of this skill by 1 turn if this attack kills an enemy. If this attack kills 2 or more enemies, grants this Champion an Extra Turn instead.`,
          damage: "4*ATK*(1+0.1*Active Buff Count)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "First Ax's Fury",
          description: `Attacks 1 enemy 2 times. Before attacking, places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns.<br><br>Will ignore [Shield] buffs. <br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brutal Vehemence [P]",
          description: `Each Extra Turn this Champion gets increases their C. DMG by 10% (stacks up to 50%). <br><br>Each Extra Turn this Champion gets also decreases the damage they receive by 5% (stacks up to 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 476",
        "DEF": "1 101",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 30%`,
};
