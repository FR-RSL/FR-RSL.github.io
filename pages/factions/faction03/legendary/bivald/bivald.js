const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thorn Maul",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Provoke] debuff for 1 turn. Also heals the ally with the lowest HP by 15% of the damage inflicted.<br><br>The [Provoke] debuff can be placed even if this attack lands as a weak hit.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "0.25*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Admonition of Barbs",
          description: `Attacks all enemies 2 times. The first hit has a 75% chance of placing a [Provoke] debuff for 1 turn. The second hit has a 75% chance of placing a [Leech] debuff for 2 turns. Also places a 25% [Strengthen] buff on this Champion for 2 turns.<br><br>The [Leech] and [Provoke] debuffs can be placed even if this attack lands as weak hits.`,
          damage: "0.15*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Briar Nexus",
          description: `Attacks all enemies. Damage increases by 5% for each debuff on each enemy. Also heals all allies by 20% of the damage inflicted and places a [Shield] buff on them for 2 turns equal to 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage DealtShield Multiplier: 0.2*Damage Dealt`,
          damage: "0.25*HP*(1+0.05*Target Debuffs)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dethorned [P]",
          description: `Decreases the damage taken by all allies from enemies under [Provoke] debuffs by 15%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "903",
        "DEF": "1 178",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 28%`,
};
