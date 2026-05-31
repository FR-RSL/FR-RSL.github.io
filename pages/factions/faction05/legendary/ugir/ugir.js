const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wyrmwrath",
          description: `Attacks 1 enemy. <br><br>Has an 80% chance of stealing a random buff from the enemy. Also has an 80% chance of placing a [Block Buffs] debuff on the enemy for 2 turns.`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Earth Puncture",
          description: `Attacks all enemies. <br><br>Has a 75% chance of removing all buffs from all enemies.<br><br>Then, has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ogryn Fortitude",
          description: `Places a 50% [Increase ACC] buff on all allies for 2 turns. <br><br>Also places a 60% [Increase DEF] buff on all allies whose DEF is higher than or equal to their ATK for 2 turns. <br><br>If an ally’s ATK is higher than their DEF, places a 50% [Increase ATK] buff on them for 2 turns instead.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Scourge of Dragons [P]",
          description: `Whenever an enemy is revived, instantly activates [Earth Puncture]. If an enemy is revived by a Champion from the Lizardmen Faction, the effects of [Earth Puncture] cannot be resisted.<br><br>Instantly activating [Earth Puncture] will not place the skill on cooldown. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 2,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 800",
        "ATQ": "771",
        "DEF": "1 288",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Arena by 70`,
};
