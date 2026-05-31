const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Graceful Guide",
          description: `Attacks 1 enemy. Places a 15% [Continuous Heal] buff on the ally with the lowest HP for 2 turns.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mending Ways",
          description: `Attacks 1 enemy. Heals this Champion and the ally with the lowest HP by 30% of this Champion's MAX HP. Has a 75% chance of placing a 100% [Heal Reduction] debuff and a [Leech] debuff on all enemies for 2 turns. <br><br>These debuffs cannot be resisted if Khoronar is on the same team.<br><br><br>Heal Multiplier: 0.3*HP`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Beauty's Allure",
          description: `Heals all allies by 40% of their MAX HP. Places a [Block Debuffs] buff on all allies for 2 turns. <br><br>If a Champion is fully healed by this skill, also places a [Shield] buff on them for 2 turns equal to 25% of the Champion's HP.<br><br><br>Heal Multiplier: 0.4*Target Max HP<br>Shield Multiplier: 0.25*Target Max HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lover's Sacrifice [P]",
          description: `Fills the Turn Meters of all allies by 20% and heals them by 20% of this Champion's MAX HP when this Champion is killed. <br><br>Revives this Champion with 75% HP when killed if Khoronar is on the same team.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "1 002",
        "DEF": "1 134",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all Battles by 19%`,
};
