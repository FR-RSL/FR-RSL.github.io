const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rending Claws",
          description: `Attacks 1 enemy. Has a 35% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "6.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pack Leader",
          description: `Places a 50% [Ally Protection] and a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sheltering Scales [P]",
          description: `Places a 15% [Continuous Heal] buff on an ally for 1 turn whenever an ally loses 20% of their MAX HP in one hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 460",
        "ATQ": "683",
        "DEF": "1 057",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
