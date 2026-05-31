const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Deathknell",
          description: `Attacks all enemies. Has a 35% chance of decreasing the duration of all enemy buffs by 1 turn.`,
          damage: "2.6*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Canticle of Cold",
          description: `Attacks all enemies. Has a 75% chance of placing a [Hex] debuff and a 25% [Weaken] debuff for 2 turns. <br><br>If the target is under a [Freeze] debuff, has a 75% chance of placing a [Hex] debuff and a 25% [Weaken] debuff for 3 turns instead.`,
          damage: "3.2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Polar Vortex",
          description: `Places a [Freeze] debuff on all enemies for 1 turn. <br><br>Fully depletes the Turn Meters of all enemies that receive [Freeze] debuffs from this skill. <br><br>Fills the Turn Meters of all allies by 10% for each [Freeze] debuff attempt blocked or resisted by the enemy team.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rime Hammer [P]",
          description: `Allies will ignore 10% of the target's DEF if the target is under [Freeze] debuffs. <br><br>If the [Freeze] debuff was placed by this Champion, allies will ignore 20% of the target’s DEF instead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "1 189",
        "DEF": "1 112",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 30%`,
};
