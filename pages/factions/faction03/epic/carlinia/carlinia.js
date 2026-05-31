const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Perdition",
          description: `Attacks 1 enemy. Has a 40% chance of placing a [HP Burn] debuff for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Penance",
          description: `Attacks all enemies. Has a 55% chance of placing a 50% [Decrease ATK] debuff for 2 turns. This debuff cannot be resisted by targets under [HP Burn] debuffs.`,
          damage: "4.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Always Watched",
          description: `Decreases the duration of all debuffs on all allies by 1 turn, then places a 15% [Strengthen] buff on all allies for 2 turns. This buff cannot be removed or stolen.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Burn With Shame [P]",
          description: `Every time an enemy under a [HP Burn] debuff gets a turn, decreases the duration of 2 random buffs on that enemy by 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "793",
        "DEF": "1 365",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 35`,
};
