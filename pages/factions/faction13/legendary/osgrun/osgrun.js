const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Obsidian Blade",
          description: `Attacks 1 enemy. <br><br>Has a 50% chance of increasing the cooldown of a random active skill on the target by 2 turns. <br><br>Also fills the Turn Meters of all allies by 10%.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Magicks of Ireth",
          description: `Has a 75% chance of removing all buffs from all enemies. <br><br>Decreases the Turn Meters of all enemies whose Turn Meter is equal to or lower than 50% by 20%. If an enemy’s Turn Meter is more than 50% full, decreases it to 50% instead. <br><br>Has a 75% chance of placing a [Stun] debuff for 1 turn on enemies whose Turn Meter was reduced to 50%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "To Death, Unsurrendered",
          description: `Teams up with all allies to attack a single enemy. The allies joining the attack will use their default skills. Before attacking, places a 50% [Increase ATK] buff and a 7.5% [Shatter] buff on all allies for 2 turns. <br><br>Decreases the cooldowns of all allies’ active skills, except this Champion’s, by 1 turn if the target is killed.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dark Whisperings [P]",
          description: `[Passive Effect]<br><br>Allies inflict 20% more damage against enemies under [Stun] debuffs. <br><br>[Active Effect]<br><br>Whenever an ally is killed, instantly activates the Magicks of Ireth skill. Will not put the skill on cooldown. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 156",
        "DEF": "1 101",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 28%`,
};
