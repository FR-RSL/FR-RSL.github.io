const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crusade",
          description: `Attacks 1 enemy. Grants an Extra Turn if the target is killed.`,
          damage: "3.75*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Surging Strength",
          description: `Places a 50% [Increase ATK] buff on this Champion for 4 turns. Grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ageless Endurance [P]",
          description: `When hit by an enemy, places a 15% [Continuous Heal] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 365",
        "DEF": "980",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Campaign by 40%`,
};
