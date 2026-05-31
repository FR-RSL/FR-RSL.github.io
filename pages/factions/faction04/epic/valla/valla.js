const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Piercing Blade",
          description: `Attacks 1 enemy 2 times. Increases the inflicted damage by 15% if the target is under a [Shield] buff.`,
          damage: "1.55*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crush The Wall",
          description: `Removes all [Shield] buffs on all enemies, then attacks all enemies. Has a 30% chance of placing a 60% [Decrease DEF] debuff on all enemies for 2 turns.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fortified Core",
          description: `Places a [Shield] buff on this Champion for 3 turns equal to 20% of their MAX HP. Also places a 60% [Increase DEF] buff on this Champion for 3 turns and fills this Champion’s Turn Meter by 50%.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Resolute Defense [P]",
          description: `Decreases the damage received by this Champion by 15% while under a [Shield] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "771",
        "DEF": "1 409",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Arena by 45`,
};
