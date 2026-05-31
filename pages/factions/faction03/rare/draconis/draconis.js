const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Beneficence",
          description: `Attacks 1 enemy. Heals the ally with the lowest HP by 7.5% of the damage inflicted.<br><br><br>Heal Multiplier: 0.075*Damage Dealt`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Heal +5%", "Level 5: Heal +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sacred Wards",
          description: `Places a [Shield] buff on all allies equal to 15% of this Champion's MAX HP for 2 turns.<br><br><br>Shield Multiplier: 0.15*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Order of Mercy",
          description: `Attacks 1 enemy. Removes all debuffs from the ally with the lowest HP, then heals them by 25% of the damage inflicted.<br><br><br>Heal Multiplier: 0.25*Damage Dealt`,
          damage: "0.34*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "914",
        "DEF": "925",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
