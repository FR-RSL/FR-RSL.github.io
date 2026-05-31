const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Armor Piercer",
          description: `Attacks 1 enemy. Will ignore 25% of the target's DEF.`,
          damage: "2.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stunning Toss",
          description: `Attacks 1 enemy 2 times. Has a 75% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "2.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Talons",
          description: `Attacks 3 times at random. Has a 75% chance of placing a 50% [Decrease ATK] debuff and a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "2.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 608",
        "DEF": "837",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 23%`,
};
