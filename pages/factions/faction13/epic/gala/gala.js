const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brutal Bludgeon",
          description: `Attacks 1 enemy 2 times. Each hit will ignore 30% of the target's DEF. Places a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is equal to 20% of the damage inflicted.<br><br><br>Shield Multiplier: 0.2*Damage Dealt`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fearless Aggression",
          description: `Attacks 1 enemy. Will ignore 50% of target's DEF when attacking under a [Shield] buff. Heals this Champion by 50% of the damage inflicted. Places a [Shield] buff on this Champion equal to any surplus heal for 3 turns.<br><br><br>Heal Multiplier: 0.5*Damage DealtShield Multiplier: Remaining Heal Amount`,
          damage: "4.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sheer Swagger",
          description: `Attacks 1 enemy 3 times. Each hit will ignore 25% of the target's DEF. Grants an Extra Turn if this Champion has full HP after using this Skill.`,
          damage: "1.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 432",
        "DEF": "661",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "60",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 25%`,
};
