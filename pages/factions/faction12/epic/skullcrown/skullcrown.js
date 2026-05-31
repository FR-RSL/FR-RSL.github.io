const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wave of Souls",
          description: `Attacks all enemies. Places an extra hit if the target has more than 50% HP.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Corrupting Touch",
          description: `Attacks all enemies. Has a 50% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "4.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Resilient [P]",
          description: `Places an [Unkillable] buff on this Champion for 1 turn every time their HP drops below 20%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "From Beyond [P]",
          description: `Revives this Champion with 30% HP. <br><br>[Only available when Sinesha is on the same team.]`,
          cooldown: 8,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 509",
        "DEF": "826",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 23%`,
};
