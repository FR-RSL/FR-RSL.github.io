const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cleaver",
          description: `Attacks 1 enemy 2 times.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%", "Level 7: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gratuitous Death",
          description: `Attacks 1 enemy. Grants an Extra Turn if the target is killed.`,
          damage: "6.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 189",
        "DEF": "749",
        "VIT": "88",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
