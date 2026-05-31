const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Inscribed Axes",
          description: `Attacks 1 enemy. Heals this Champion by 10% of the damage inflicted.<br><br><br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spirits' Verdict",
          description: `Sacrifices HP equal to 10% of this Champion's MAX HP, then heals a target ally by 10% of their MAX HP. Also has a 40% chance of placing a 7.5% [Continuous Heal] buff on that ally for 1 turn.<br><br><br>Heal Multiplier: 0.1*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "782",
        "DEF": "870",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
