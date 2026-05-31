const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crushing Impact",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flail Master",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns.<br><br>Heals this Champion by 25% of the damage inflicted.<br><br><br>Heal Multiplier: 0.25*Damage Dealt`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +15%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fend Them Off",
          description: `Places a 50% [Ally Protection] buff and a 15% [Continuous Heal] buff on all allies except this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "859",
        "DEF": "1 211",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "75",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Force Ally HP in All Battles by 33%`,
};
