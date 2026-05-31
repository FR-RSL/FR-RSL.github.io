const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stave Smash",
          description: `Attacks 1 enemy. <br><br>Has a 50% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.25*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Skinsealer",
          description: `Places a 25% [Increase RES] buff on all allies for 2 turns. <br><br>Also places a [Shield] buff on all allies equal to 20% of their MAX HP for 2 turns.<br><br><br>Shield Multiplier: 0.2*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hidestitcher",
          description: `Heals all allies by 15% of this Champion’s MAX HP. <br><br>Also fills the Turn Meters of all allies by 15%.<br><br><br>Heal Multiplier: 0.15*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Cooldown -1", "Level 4: Heal +5%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "815",
        "DEF": "1 057",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
