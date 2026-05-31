const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Noxious Claws",
          description: `Attacks 1 enemy 3 times. Each hit has a 40% chance of placing a 5% [Poison] debuff for 2 turns. <br><br>If the target is under a [Hex] debuff, each hit also has a 40% chance of applying a [Debuff Spread] effect, taking 1 random debuff from the target and placing it on all enemies.`,
          damage: "1.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Immortal Malison",
          description: `Attacks all enemies 3 times. Each hit has a 60% chance of increasing the duration of any [Hex] debuffs on enemies by 1 turn. <br><br>If enemies are not under a [Hex] debuff, each hit has a 60% chance of placing a [Hex] debuff for 2 turns.`,
          damage: "1*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hex Blood [P]",
          description: `Has an 80% chance of inflicting damage from one [Poison] debuff to enemies under a [Hex] debuff whenever their allies receive damage from [Poison] debuffs.`,
          damage: "Damage Dealt",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 354",
        "DEF": "881",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 18%`,
};
