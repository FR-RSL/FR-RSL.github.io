const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pressing Advance",
          description: `Attacks 1 enemy 2 times. Each hit has a 25% chance of filling a random ally’s Turn Meter by 5%.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rain of Gore",
          description: `Attacks all enemies. Places a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          damage: "3.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bestial Communion",
          description: `Heals a target ally by 25% of their MAX HP and places a [Revive on Death] buff on them for 2 turns.<br><br><br>Heal Multiplier: 0.25*Target Max HP`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 013",
        "DEF": "925",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 10%`,
};
