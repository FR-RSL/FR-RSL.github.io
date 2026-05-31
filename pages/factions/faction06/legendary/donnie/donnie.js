const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bo-dacious Bash",
          description: `Attacks 1 enemy. <br><br>Heals all allies by 5% of this Champion’s MAX HP. <br><br>Instantly activates one random [Continuous Heal] buff on all allies.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "0.25*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shellshocker",
          description: `Attacks all enemies. <br><br>Decreases the cooldowns of all allies' skills, except this Champion's, by 2 turns. This skill's cooldown cannot be decreased or reset. <br><br>Places a 30% [Increase SPD] buff on all allies for 2 turns.`,
          damage: "0.24*HP",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Secret of the Ooze",
          description: `Removes all debuffs from all allies. <br><br>Places a 15% [Continuous Heal] buff and a 25% [Strengthen] buff on all allies for 2 turns. <br><br>Also fills the Turn Meters of all allies by 20%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "I Got You Bro! [P]",
          description: `[Passive Effect]<br><br>Whenever Leonardo, Donatello, Michelangelo, or Raphael attacks, this Champion joins in that attack.<br><br>[Active Effect]<br><br>Whenever an ally is about to receive a fatal hit, this Champion prevents that ally’s death and keeps them alive with 1 HP. Then equalizes that ally’s HP. The HP level of that ally will be brought up to the average HP level of the team. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "1 013",
        "DEF": "1 112",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 30%`,
};
