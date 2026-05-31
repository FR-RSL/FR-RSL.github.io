const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Painful Bite",
          description: `Attacks 1 enemy. Has a 20% chance of increasing the cooldown of one of the target's skills by 1 turn at random.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shriek",
          description: `Attacks 2 times at random. Places a 30% [Reflect Damage] buff on all allies for 3 turns.`,
          damage: "0.23*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flesh Feast",
          description: `Attacks 1 enemy 2 times. Fully heals this Champion if the target is killed by this attack. Places a [Stun] debuff for 2 turns if the target survives.<br><br><br>Heal Multiplier: Target Max HP`,
          damage: "3.7*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "1 057",
        "DEF": "848",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
