const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Da Magic Stick",
          description: `Attacks 1 enemy 2 times. Places a 60% [Increase DEF] buff for 2 turns on the ally with the lowest current HP.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charge Cant",
          description: `Attacks all enemies. Places a 30% [Increase SPD] buff on all allies for 2 turns, then heals all allies by 15% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.15*HP`,
          damage: "3.7*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rise And Fight",
          description: `Revives all dead allies with 30% HP. Also places a [Shield] buff on all allies for 2 turns equal to 20% of this Champion’s MAX HP.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Aid the Feeble [P]",
          description: `Decreases the damage received by allies with 50% HP or less by 10%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 145",
        "DEF": "947",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
