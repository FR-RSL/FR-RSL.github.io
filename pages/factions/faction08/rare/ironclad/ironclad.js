const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wallop",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "0.1*HP+ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Amok",
          description: `Removes 1 random debuff from all allies. Places a 25% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blood Burst [P]",
          description: `When healed, will attack all enemies inflicting damage proportional to any surplus heal. Damage inflicted is equal to 50% of any surplus heal.`,
          damage: "Remaining Heal Amount*0.5",
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "947",
        "DEF": "826",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 16%`,
};
