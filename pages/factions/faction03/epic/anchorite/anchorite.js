const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Warm Embrace",
          description: `Attacks all enemies. Heals the ally with the lowest HP by 10% of the damage inflicted.<br><br><br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "2.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Heal +5%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Prayer of Prowess",
          description: `Removes 1 random debuff from all allies, then increases the duration of all ally buffs by 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sacred Trust",
          description: `Fully heals a target ally, then places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 1*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "1 046",
        "DEF": "980",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
