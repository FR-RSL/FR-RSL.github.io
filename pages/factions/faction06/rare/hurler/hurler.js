const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spin Throw",
          description: `Attacks 1 enemy 2 times. Each hit has a 25% chance to ignore DEF by 50%.`,
          damage: "ATK*1.7",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Firebolt",
          description: `Attacks 1 enemy. Removes 1 random buff from the target. Fills this Champion's Turn Meter by 30%.`,
          damage: "ATK*5",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pin Down",
          description: `Attacks 1 enemy. Puts the target's skills on cooldown.`,
          damage: "ATK*5.5",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 432",
        "DEF": "617",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 21%`,
};
