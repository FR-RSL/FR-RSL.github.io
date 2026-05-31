const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Strange Animus",
          description: `Attacks 1 enemy. Heals this Champion by 10% of their MAX HP.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "0.21*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Damage +10%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bell's Toll",
          description: `Attacks all enemies. Has a 75% chance of filling the Turn Meters of all allies by 30%. <br><br>Also has a 75% chance of removing all debuffs from all allies.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Conduit of Agonies",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Also places a 25% [Strengthen] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Violence Locus [P]",
          description: `Increases this Champion’s RES by 20 and DEF by 10% for each [Ally Protection] buff on allies. Also increases ally RES by 15 and DEF by 5% for each [Ally Protection] buff on allies. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead. <br><br>Counterattacks whenever an ally under an [Ally Protection] buff is attacked. Can occur once per enemy turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "881",
        "DEF": "1 255",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 30%`,
};
