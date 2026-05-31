const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Swift Blow",
          description: `Attacks 1 enemy 2 times.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cut Down To Size",
          description: `Attacks 1 enemy. Removes 2 random buffs from the target.`,
          damage: "5.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Purge",
          description: `Attacks 1 enemy. Enemies killed by this skill cannot be revived.`,
          damage: "5.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Damage +5%", "Level 6: Damage +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 421",
        "DEF": "793",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in all Battles by 18%`,
};
