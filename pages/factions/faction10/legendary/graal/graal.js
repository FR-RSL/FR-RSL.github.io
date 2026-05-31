const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brittleness Bane",
          description: `Attacks 1 enemy.<br><br>Has a 60% chance of placing a 50% [Decrease ATK] debuff for 2 turns.<br><br>Has a 100% chance instead if the target is under a [HP Burn] debuff or a [Freeze] debuff.`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Death Fires",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff for 2 turns.`,
          damage: "3.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Elemental Unity",
          description: `Attacks all enemies. Places a [Freeze] debuff for 1 turn and a [HP Burn] debuff for 3 turns on targets already under [HP Burn] debuffs. The [HP Burn] debuff cannot be resisted.`,
          damage: "3.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "1 145",
        "DEF": "1 145",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
