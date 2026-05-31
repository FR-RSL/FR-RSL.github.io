const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Meaty Fists",
          description: `Attacks 1 enemy 2 times. Each hit has a 15% chance of placing a [Stun] debuff for 1 turn.<br><br>Has a 50% chance of placing a 60% [Decrease DEF] debuff for 1 turn if the [Stun] debuff is placed.`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lightning Storm",
          description: `Attacks all enemies. Has a 50% chance of placing a [Stun] debuff for 1 turn.<br><br>Places a [Shield] buff on all allies for 3 turns equal to 25% of the damage inflicted.<br><br><br>Shield Multiplier: 0.25*Damage Dealt`,
          damage: "0.21*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "It's Alive",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 3 turns.<br><br>Heals this Champion by 50% of their MAX HP.<br>Places a 15% [Continuous Heal] buff on this Champion for 3 turns.<br><br><br>Heal Multiplier: 0.5*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Spooky Groan [P]",
          description: `Places a [Fear] debuff on the attacker for 1 turn whenever an ally is attacked while under an [Ally Protection] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "958",
        "DEF": "815",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Arena by 33%`,
};
