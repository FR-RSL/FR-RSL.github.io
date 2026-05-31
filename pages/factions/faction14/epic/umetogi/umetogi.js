const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sai Assassin",
          description: `Attacks 1 enemy 2 times. Has an additional 20% chance of inflicting a critical hit if this Champion is under a [Veil] or [Perfect Veil] buff.`,
          damage: "1.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Silent Parting",
          description: `Attacks 1 enemy 2 times. Each hit will ignore 20% of the target's DEF. Has an additional 20% chance of inflicting a critical hit if this Champion is under a [Veil] or [Perfect Veil] buff.`,
          damage: "2.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fade Into Nothing",
          description: `Places a [Perfect Veil] buff and a 30% [Increase SPD] buff on this Champion for 2 turns, then fills this Champion’s Turn Meter by 40%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Standoff [P]",
          description: `Whenever this Champion is attacked, completely blocks 1 hit, decreasing the incoming damage to zero, then counterattacks with the default skill.<br><br>When attacked by a Boss, decreases the incoming damage by 50% instead before counterattacking.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 564",
        "DEF": "859",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 15%`,
};
