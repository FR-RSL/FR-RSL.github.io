const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stern Admonishing",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Provoke] debuff for 1 turn. Also places a [Shield] buff on this Champion for 2 turns equal to 10% of their MAX HP.<br><br><br>Shield Multiplier: 0.1*HP`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Reign of Sorrow",
          description: `Attacks all enemies. Places an extra hit on enemies under [Stun], [Freeze], [Fear], [True Fear], [Provoke], [Petrification] debuffs. Each hit has a 75% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Quality Minions",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns. Also places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Infectious Fury [P]",
          description: `When hit, has a 20% chance of placing a [Provoke] debuff on the attacker for 1 turn. Occurs once per hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "870",
        "DEF": "1 200",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
