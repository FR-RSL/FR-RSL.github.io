const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lightning Sanction",
          description: `Attacks 1 enemy. <br><br>Has a 35% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fill With Blessing",
          description: `Heals an ally by 30% of this Champion’s MAX HP.<br><br>Places a [Shield] buff equal to any surplus heal for 2 turns if the target is fully healed by this Skill.<br><br><br>Heal Multiplier: 0.3*HPShield Multiplier: Remaining Heal Amount`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Heal +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brim With Life",
          description: `Places a 7.5% [Continuous Heal] buff on all allies for 2 turns.<br>Places a [Shield] buff equal to 10% of the target’s HP on all allies for 2 turns If an ally’s HP is full.<br><br><br>Shield Multiplier: 0.1*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "991",
        "DEF": "947",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 13%`,
};
