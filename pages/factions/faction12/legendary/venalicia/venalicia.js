const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Torturous Bolts",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit has a 50% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Purge The Impure",
          description: `Attacks all enemies. Before attacking, removes all buffs from all enemies. <br><br>Has a 75% chance of placing a [Block Buffs] debuff and a 60% [Decrease DEF] debuff on all enemies for 2 turns.`,
          damage: "6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mother Knows Best",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter. If all other allies are dead, revives them with 75% HP and 75% Turn Meter instead, and decreases the cooldown of all revived ally skills by 1 turn. <br><br>Also increases the cooldown of all enemy skills by 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Warped Benevolence [P]",
          description: `Fills this Champion's Turn Meter by 20% whenever an ally dies. <br><br>Heals this Champion by 20% of their MAX HP whenever they are attacked by an enemy under a [Pain Link] debuff. Occurs once per turn. <br><br>Places a [Pain Link] debuff for 2 turns on enemies who deal damage equal to 25% or more of an ally’s MAX HP with a single skill. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>Heal Multiplier: 0.2*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "892",
        "DEF": "1 211",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
