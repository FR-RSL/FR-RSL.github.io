const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chop, Chop, Chop",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit heals this Champion by 3% of their MAX HP.<br><br><br>Heal Multiplier: 0.03*HP`,
          damage: "0.08*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Logger's Bane",
          description: `Attacks all enemies 2 times. <br><br>Each hit has a 50% chance of placing a 25% [Decrease ATK] debuff for 2 turns. <br><br>Also places a [Shield] buff on all allies, equal to 20% of this Champion's MAX HP, for 2 turns.<br><br><br>Shield Multiplier: 0.2*HP`,
          damage: "0.13*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rootroar",
          description: `Places a 15% [Strengthen] buff on all allies for 2 turns. <br><br>Also places a [Provoke] debuff on an enemy for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "892",
        "DEF": "980",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 15%`,
};
