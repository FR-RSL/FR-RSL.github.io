const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Searing Blow",
          description: `Attacks 1 enemy. Has a 60% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wall of Flame",
          description: `Attacks 1 enemy. Places a 60% [Increase DEF] buff on all allies for 2 turns. Places a [Shield] buff on all allies for 2 turns equal to 20% of their MAX HP if this attack kills an enemy.<br><br><br>Shield Multiplier: 0.2*Target Max HP`,
          damage: "5.6*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fiery Rebirth [P]",
          description: `Revives a random ally with 30% HP every time this Champion kills an enemy. Resets the cooldowns on this Champion's Skills if this Champion kills an enemy and all allies are alive.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "837",
        "DEF": "1 398",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 33%`,
};
