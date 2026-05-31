const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Half-Sword",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Leech] debuff for 2 turns. Will ignore 30% of the target's DEF.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mordhau",
          description: `Attacks 1 enemy. Has a 60% chance of placing a [Stun] debuff for 1 turn. Resets the cooldowns on each of this Champion's skills if the target is killed.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Death Warrant",
          description: `Attacks 1 enemy. Has a 60% chance of placing a 25% [Weaken] debuff for 2 turns. Damage is increased by 75% if this Champion has full HP.`,
          damage: "7*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +20%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 387",
        "DEF": "672",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 32%`,
};
