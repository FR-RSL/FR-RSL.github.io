const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Long Shot",
          description: `Attacks 1 enemy. <br>Has a 15% chance of placing an extra hit.`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Support Fire",
          description: `Attacks 1 enemy.<br><br>Places a 30% [Increase DEF] buff on the ally with the lowest HP for 3 turns.`,
          damage: "4.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prayer of Comfort",
          description: `Places a [Block Debuffs] buff on all allies for 1 turn.<br><br>Places a [Shield] buff equal to 30% of this Champion's MAX HP on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.3*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 134",
        "DEF": "903",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Faction Wars by 30`,
};
