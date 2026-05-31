const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Verminous Grasp",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "2.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Duke of Flies",
          description: `Attacks all enemies. Has a 75% chance of placing a [Hex] debuff for 2 turns.`,
          damage: "5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Swarm of Horrors",
          description: `Attacks all enemies. Has an 80% chance of increasing the duration of all enemy debuffs by 1 turn. <br><br>When hitting enemies under [Hex] debuffs, also has a 60% chance of putting one of their skills on cooldown.`,
          damage: "4.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pestiferous [P]",
          description: `Has a 10% chance of stealing the heal each time an enemy under a [Hex] debuff is about to be healed.<br> <br>[Does not work against Bosses. The amount healed will be the same as it would have been on the original target of the heal, except if the heal is based on the target's HP, in which it will scale off Vildrax's HP.]`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "738",
        "DEF": "1 255",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
