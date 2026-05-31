const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grotesque Strength",
          description: `Has a 50% chance of placing a 25% [Increase ATK] buff on this Champion for 2 turns, then attacks 1 enemy.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ghoulish Feeding",
          description: `Attacks 1 enemy 3 times. Heals this Champion by 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "1.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Army of Death",
          description: `Teams up with 3 random allies to attack a single enemy. The allies joining the attack will use their default skills.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 454",
        "DEF": "914",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
