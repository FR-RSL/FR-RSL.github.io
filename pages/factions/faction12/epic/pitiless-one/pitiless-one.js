const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Split Arrow",
          description: `Attacks 1 enemy 2 times. Each critical hit fills this Champion's Turn Meter by 5%.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Projectile Burst",
          description: `Attacks all enemies.<br><br>Each critical hit boosts this Champion’s Turn Meter by 15%.`,
          damage: "3.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Agony Bonds [P]",
          description: `Each critical hit heals this Champion by 15% of the damage inflicted.<br><br>Heal Multiplier: 0.15*Damage Dealt`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 443",
        "DEF": "771",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 19%`,
};
