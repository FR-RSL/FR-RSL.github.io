const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lunge",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a [Stun] debuff for 1 turn. This chance increases to 100% if the target has an [Increase SPD] buff.`,
          damage: "ATK*2.1",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Aegis",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Places a [Shield] buff on this Champion equal to 40% of this Champion's MAX HP for 2 turns. This buff cannot be removed.<br><br><br>Shield Multiplier: 0.4*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coup de Grace",
          description: `Attacks 1 enemy. Places an extra hit if the target has a [Stun] debuff. The extra hit is always critical. Steals 50% of the target's Turn Meter if they are not under a [Stun] debuff.`,
          damage: "2*ATK+0.2*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Damage +10%", "Level 6: Damage +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "958",
        "DEF": "1 057",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
