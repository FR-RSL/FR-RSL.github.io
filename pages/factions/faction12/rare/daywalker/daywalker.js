const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grave's Grasp",
          description: `Attacks 1 enemy. Places an extra hit if the target has more HP than this Champion.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Unnatural Vigor",
          description: `Places a 25% [Ally Protection] buff on all allies for 2 turns. Places a [Block Debuffs] buff on this Champion for 2 turns. Removes all debuffs from this Champion.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Death Denied",
          description: `Revives this Champion with 30% HP and attacks all enemies after being killed. This hit cannot be critical.`,
          damage: "6.2*ATK",
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "925",
        "DEF": "1 002",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Arena by 21%`,
};
