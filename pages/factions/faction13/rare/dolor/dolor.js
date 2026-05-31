const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Banisher Axe",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "3.46*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stern Punishment",
          description: `Attacks 1 enemy. Has a 40% chance of placing a [Stun] debuff for 1 turn if the target is under any debuff.`,
          damage: "5.69*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Forebear's Boon",
          description: `Places a 15% [Continuous Heal] buff on all allies for 2 turns. Also places a [Block Debuffs] buff on the target ally for 1 turn if they have less than 100% HP.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 035",
        "DEF": "870",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 15%`,
};
