const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gathering Inferno",
          description: `Attacks 1 enemy. Decreases [Bomb] debuff detonation countdowns by 1 turn.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bident Mastery",
          description: `Attacks 1 enemy 2 times. Places a [Counterattack] buff on this Champion for 2 turns.`,
          damage: "2.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Demonic Explosives",
          description: `Attacks 1 enemy. Has a 60% chance of placing a [Bomb] debuff that detonates after 3 turns.<br><br><br>Bomb Multiplier:`,
          damage: "6.6*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Cooldown -1", "Level 8: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 321",
        "DEF": "716",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 16%`,
};
