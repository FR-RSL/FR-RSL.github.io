const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thundering Impact",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.45*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tower Above",
          description: `Attacks all enemies. Places a [Shield] buff on this Champion for 2 turns equal to 20% of their MAX HP.<br><br><br>Shield Multiplier: 0.2*HP`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Stand Proud",
          description: `Places a [Counterattack] buff on a target ally for 2 turns. Also places a 30% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "705",
        "DEF": "1 211",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 20%`,
};
