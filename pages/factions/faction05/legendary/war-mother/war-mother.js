const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cry Havoc",
          description: `Attacks 1 enemy 2 times. Each hit places a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Special Brew",
          description: `Attacks all enemies. Places two [Bomb] debuffs that detonate after 2 turns. Bomb damage increases by 100% against Bosses.<br><br><br>Bomb Multiplier: 5.5*ATK`,
          damage: "4.25*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mother's Touch",
          description: `Attacks all enemies. Instantly detonates all [Bomb] debuffs if this Champion is under an [Increase ATK] buff.`,
          damage: "4.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 509",
        "DEF": "903",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 65`,
};
