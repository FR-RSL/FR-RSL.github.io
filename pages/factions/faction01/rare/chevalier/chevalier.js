const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hack Through",
          description: `Attacks 1 enemy 2 times. Has a 20% chance of repeating the attack. Will ignore [Block Damage] and [Shield] buffs.`,
          damage: "1.78*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stern Rebuke",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "7.1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lord Protector",
          description: `Places a 30% [Increase DEF] buff and a 7.5% [Continuous Heal] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "804",
        "DEF": "1 112",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 19%`,
};
