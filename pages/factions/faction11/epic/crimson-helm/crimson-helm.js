const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sucker Punch",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 50% [Decrease ATK] debuff for 1 turn.`,
          damage: "2.7*ATK+2*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vile Tongue",
          description: `Attacks 4 times at random. Each hit has a 75% chance of placing a [Provoke] debuff for 1 turn. Places a [Block Damage] buff on this Champion for 1 turn.`,
          damage: "1.4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "En Garde!",
          description: `Places a [Revive on Death] buff and a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "727",
        "DEF": "1 531",
        "VIT": "85",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 33%`,
};
