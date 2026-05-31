const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Patient Tactician",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a [Provoke] debuff for 1 turn if the target is under a [Decrease SPD] debuff.`,
          damage: "1.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Defend the Nest",
          description: `Places a 50% [Ally Protection] buff on an ally for 2 turns, then a [Block Debuffs] buff on that ally for 1 turn. <br><br>Also places a [Shield] buff on this Champion for 2 turns equal to 20% of this Champion’s MAX HP.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Primal Tremor",
          description: `Attacks all enemies. Has a 40% chance of placing a [Stun] debuff for 1 turn. The chance increases to 75% against enemies under [Decrease SPD] debuffs.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Eggwatcher [P]",
          description: `Whenever this Champion is attacked, or whenever allies under [Ally Protection] buffs are attacked, has a 30% chance of placing a 30% [Decrease SPD] debuff on the attacker for 2 turns.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "727",
        "DEF": "1 421",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 25%`,
};
