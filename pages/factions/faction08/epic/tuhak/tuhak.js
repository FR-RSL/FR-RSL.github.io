const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Unfair Fight",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of increasing the cooldown of one of the target’s Skills by 1 turn at random. Increases the cooldowns of all of the target’s Skills by 1 turn instead if this Champion has less than 50% HP when attacking on each hit.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Whirl of Battle",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns. Also places a 30% [Increase SPD] buff on this Champion for 2 turns. Heals this Champion by 15% of the damage inflicted if they have less than 50% HP when attacking.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "3.75*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Clever Brutality",
          description: `Attacks 1 enemy. Steals 50% of the target’s current Turn Meter. Has a 75% chance of placing a [Stun] debuff for 2 turns. Steals 100% of the target’s Turn Meter if this Champion has less than 50% HP when attacking.`,
          damage: "6.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ironheart [P]",
          description: `Decreases the damage taken by this Champion by 20% when their HP drops below 60%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 365",
        "DEF": "870",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 22%`,
};
