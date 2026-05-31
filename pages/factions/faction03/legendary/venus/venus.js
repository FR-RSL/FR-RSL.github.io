const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pining",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blind With Infatuation",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] and a 25% [Weaken] debuff for 2 turns.`,
          damage: "3.7*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Burning Passion",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff for 2 turns.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Pure Partner",
          description: `Removes all buffs from all enemies. Has a 50% chance of granting an Extra Turn. <br><br>[Only available when Cupidus is on the same team.]`,
          cooldown: 4,
          isPassive: false
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "1 090",
        "DEF": "980",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
