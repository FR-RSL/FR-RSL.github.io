const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shield Wall",
          description: `Attacks 1 enemy. Places a [Shield] buff on this Champion for 1 turn equal to the 10% of the damage inflicted.<br><br><br>Shield Multiplier: Damage Dealt*0.1`,
          damage: "5.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%", "Level 7: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cover",
          description: `Places a 50% [Ally Protection] buff on a target ally for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "617",
        "DEF": "870",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
