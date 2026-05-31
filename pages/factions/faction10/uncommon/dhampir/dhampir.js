const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Deathblow",
          description: `Attacks 1 enemy. Grants an Extra Turn if the target is killed.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bloody Feast",
          description: `Attacks all enemies. Heals by 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 410",
        "ATQ": "1 068",
        "DEF": "991",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
