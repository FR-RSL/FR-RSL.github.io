const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Whack",
          description: `Attacks 1 enemy. Fills this Champion's Turn Meter by 20% if this attack is critical.`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lightning Strike",
          description: `Attacks 1 enemy.`,
          damage: "0.15*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Cannibalism [P]",
          description: `Heals all allies by 10% of this Champion's MAX HP whenever this Champion inflicts a critical hit.<br><br>Heal Multiplier: 0.1*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 460",
        "ATQ": "870",
        "DEF": "870",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 33%`,
};
