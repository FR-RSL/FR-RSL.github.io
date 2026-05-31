const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Repent",
          description: `Attacks 1 enemy 3 times. Fills the Turn Meter of 3 random allies by 15%. Allies can only have their Turn Meter filled once per turn by this Skill.`,
          damage: "1.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mercy",
          description: `Removes all debuffs from all allies, and places a 50% [Increase ACC] buff and a 50% [Increase ATK] buff on all allies for 2 turns. <br><br>Then heals all allies. The value of the heal is proportional to this Champion's ATK and HP.<br><br><br>Heal Multiplier: (4*ATK)+(0.2*HP)`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Miracle",
          description: `Revives an ally with 75% HP and 100% Turn Meter. Also decreases the cooldowns of all the revived ally's skills by 3 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blessed Invocation [P]",
          description: `This Champion is immune to [Block Active Skills] debuffs and cooldown increasing effects.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "1 156",
        "DEF": "1 068",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in all Battles by 33%`,
};
