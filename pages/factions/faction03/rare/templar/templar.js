const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Charge",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns. Damage inflicted is proportional to DEF.`,
          damage: "3.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Righteous Challenge",
          description: `Attacks 4 times at random. Each hit has a 25% chance of placing a [Provoke] debuff for 1 turn. Places a [Block Damage] buff on this Champion for 1 turn. Damage inflicted is proportional to DEF.`,
          damage: "1.7*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Contempt [P]",
          description: `Attacks with this Champion's default skill whenever an enemy places a debuff on this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "881",
        "DEF": "1 090",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Arena by 50`,
};
