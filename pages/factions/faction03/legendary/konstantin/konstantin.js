const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sword of Suns",
          description: `Attacks 1 enemy. <br><br>Places a 60% [Decrease DEF] debuff for 2 turns. This debuff cannot be resisted when Vlad the Nightborn is on the same team.<br><br>Places an extra hit if the target is under any debuff.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rune Shatter",
          description: `Attacks all enemies 2 times. Each hit will ignore 15% of each target's DEF.<br><br>Each hit will ignore an additional 10% of each target's DEF for every [Leech], [Decrease DEF], and [Block Active Skills] debuff they are under.<br><br>If a target is under [Leech], [Decrease DEF], and [Block Active Skills] debuffs simultaneously, each hit will ignore 75% of their DEF instead.`,
          damage: "2.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Quietude",
          description: `Attacks 1 enemy. Before attacking, steals all buffs from the target and transfers all debuffs from this Champion to the target. This effect cannot be resisted when Vlad the Nightborn is on the same team.<br><br>Resets the cooldown of this skill if the target is killed.`,
          damage: "6.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Exalted [P]",
          description: `Enemies from the Undead Horde, Demonspawn, and Knights Revenant Factions killed by this Champion cannot be revived. <br><br>[All enemies killed by this Champion cannot be revived when Vlad the Nightborn is on the same team.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 421",
        "DEF": "1 178",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 35%`,
};
