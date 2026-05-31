const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Jagged Cut",
          description: `Attacks 1 enemy 2 times. Each hit heals this Champion by 2% of their MAX HP.<br><br><br>Heal Multiplier: 0.02*HP`,
          damage: "0.11*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Butcher's Block",
          description: `Places a 30% [Increase DEF] buff on all allies for 2 turns and a 15% [Continuous Heal] buff on all allies for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Reviving Stew",
          description: `Revives an ally with 30% HP and 30% Turn Meter. Places a 15% [Continuous Heal] buff on the revived ally for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Feed the Herd [P]",
          description: `Whenever a 15% [Continuous Heal] buff placed by an ally from the Skinwalkers Faction expires, is removed, or is stolen, places a 7.5% [Continuous Heal] buff on that ally for 1 turn. <br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "672",
        "DEF": "980",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
