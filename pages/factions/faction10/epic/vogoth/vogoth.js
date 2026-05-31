const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Horrendous Strength",
          description: `Attacks 1 enemy 3 times. Each hit has a 30% chance of increasing the duration of 1 random debuff on the target by 1 turn.`,
          damage: "0.07*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wave of Revulsion",
          description: `Attacks all enemies. Has a 60% chance of placing a [Provoke] debuff on all enemies for 1 turn. Also has a 60% chance of placing a 50% [Decrease ATK] debuff for 2 turns on targets who receive the [Provoke] debuff from this skill.`,
          damage: "0.2*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Festering Dynamo [P]",
          description: `Whenever this Champion is attacked, heals all allies by 50% of the damage received. <br><br>[Only heals by 25% of the damage received from Boss attacks. This Champion only receives half of the heal that all other allies receive.]<br><br>Heal Multiplier: 0.5*Damage Dealt`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Eerie Presence [P]",
          description: `When attacked, places a [Leech] debuff on the attacker for 2 turns.<br><br>If the attacker is under a [Provoke] debuff placed by this Champion, also has a 70% chance of increasing the cooldown of a random skill on the attacker by 2 turns. Occurs once per attack.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "804",
        "DEF": "1 211",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
