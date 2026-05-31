const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Arctic Warfare",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Freeze] debuff for 1 turn. The chance increases to 75% against enemies from the Orc and Ogryn Tribe Factions.`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spraydown",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Also has a 75% chance of placing a 25% [Weaken] debuff against enemies from the Orc and Ogryn Tribe Factions for 2 turns.`,
          damage: "4.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Born to Win",
          description: `Attacks 1 enemy. Removes all buffs from the target. <br><br>Removes all buffs from the target before attacking when targeting enemies from the Orc and Ogryn Tribe Factions.`,
          damage: "7*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 432",
        "DEF": "980",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in all Battles by 60`,
};
