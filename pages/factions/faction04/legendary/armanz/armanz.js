const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wyrd Blade",
          description: `Attacks 1 enemy. <br><br>Has a 35% chance of increasing the cooldown of a random active skill by 2 turns. <br><br>Fills this Champion’s Turn Meter by 10% for each turn added to the cooldown.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Greatest Hits",
          description: `Attacks all enemies. <br><br>Steals all the Turn Meter of each target, except enemies under [Sheep] debuffs. Also places a [Stun] debuff for 1 turn on all enemies not under a [Sheep] debuff.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "For My Next Trick!",
          description: `Places a [Sheep] debuff on an enemy for 1 turn. This debuff cannot be blocked.<br><br>Then, has a 75% chance of removing all buffs from all enemies. Fills this Champion’s Turn Meter by 5% for each buff removed.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Cooldown -1", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Master of Ceremonies [P]",
          description: `Whenever a [Sheep] debuff is removed or expires on an enemy, increase the cooldown of a random active skill on that enemy to its max. <br><br>Fills this Champion’s Turn Meter by 10% for each turn added to the cooldown.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "1 167",
        "DEF": "1 123",
        "VIT": "108",
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
