const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Censer Whirl",
          description: `Attacks all enemies. <br><br>Heals all allies by 5% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Incense of Inspiration",
          description: `Places a 50% [Increase ATK] buff and a 25% [Strengthen] buff on all allies for 2 turns. <br><br>Fills the Turn Meters of all allies by 15%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Revival Mandate",
          description: `Revives an ally with 50% HP and 50% Turn Meter. Also places a 50% [Increase ATK] buff on that ally for 1 turn. <br><br>Then activates the revived ally’s default skill, targeting the enemy with the lowest HP.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sentenced to Life [P]",
          description: `If an enemy is killed by an ally’s default skill after being revived by the [Revival Mandate] skill, resets the cooldown of the [Revival Mandate] skill.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "980",
        "DEF": "1 266",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 25%`,
};
