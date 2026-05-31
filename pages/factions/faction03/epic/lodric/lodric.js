const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Strike of Dismay",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hold Out",
          description: `Removes all debuffs from one ally, then places a 50% [Ally Protection] buff on that ally for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Falcon's Wings",
          description: `Places a [Shield] buff on all allies for 2 turns equal to 20% of this Champion’s MAX HP.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "947",
        "DEF": "1 101",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Doom Tower by 25%`,
};
