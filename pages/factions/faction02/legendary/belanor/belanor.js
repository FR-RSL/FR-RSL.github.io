const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Swordleader",
          description: `Attacks 1 enemy. Places a 30% [Increase C. RATE] buff on all allies for 1 turn if this attack is critical.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Insurmountable",
          description: `Attacks all enemies. Places a 60% [Decrease DEF] debuff and a 25% [Weaken] debuff for 2 turns. These debuffs cannot be resisted when Zavia is on the same team. <br><br>Also places a [Perfect Veil] buff on this Champion for 2 turns.`,
          damage: "4.2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Overkill",
          description: `Attacks 1 enemy. Will attack the enemy with the lowest HP with any surplus damage if this attack kills an enemy. The surplus damage cannot be critical.`,
          damage: "Remaining Damage Amount",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Tactical Partner",
          description: `Activates this Champion's Overkill skill. <br><br>Also activates Zavia's Poison Rain skill. <br><br>[Only available when Zavia is on the same team.]`,
          damage: "Remaining Damage Amount",
          cooldown: 4,
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 520",
        "DEF": "1 046",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in all Battles by 24%`,
};
