const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Talonrake",
          description: `Attacks 1 enemy 3 times. Each hit has a 30% chance to extend the duration of all debuffs on the target by 1 turn.`,
          damage: "1.1*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sickle Boomerangs",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease SPD] debuff and a [Leech] debuff on all enemies for 2 turns. <br><br>Also places a 50% [Decrease ACC] debuff on enemies under 2 or more debuffs for 2 turns.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Plumedart",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ACC] buff on all allies for 2 turns.<br><br>Has a 75% chance of stealing all [Block Debuffs] buffs from all enemies. <br><br>If at least 1 [Block Debuffs] buff was stolen from the enemy, places a [Block Debuffs] buff on all allies for 1 turn.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bird of Prey [P]",
          description: `This Champion’s C. DMG increases by 1% for every 10 points of ACC they have. <br><br>Grants an Extra Turn after this Champions uses any 3 skills.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 520",
        "DEF": "1 002",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
