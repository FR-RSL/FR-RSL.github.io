const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Holy Terror",
          description: `Attacks 1 enemy 2 times. <br><br>The first hit heals this Champion by 30% of the damage inflicted. <br><br>The second hit has a 65% chance of placing a [True Fear] debuff for 1 turn. This debuff cannot be resisted if the first hit fully healed this Champion.<br><br>If the target is a Boss, the second hit has a 65% chance of placing a 30% [Decrease SPD] debuff for 2 turns instead.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Storm of Righteousness",
          description: `Attacks all enemies. Before attacking, removes all [Increase DEF], [Ally Protection], and [Strengthen] buffs from all enemies. This effect cannot be resisted. <br><br>If at least one buff was removed, also places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns.<br><br>Will also ignore 30% of each target's DEF. Boosts this Champion's Turn Meter by 30% for each enemy alive after the attack.`,
          damage: "3.1*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "By My Hand!",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit ignores 30% of the target's DEF and destroys the enemy's MAX HP by 25% of the damage dealt. Cannot destroy a single enemy's MAX HP by more than 75%. If the target is a Boss, destroys MAX HP equal to 35% of the damage dealt. <br><br>If the target has any active skills on cooldown, both hits will ignore 50% of the target's DEF instead.<br><br>Ignores [Shield], [Unkillable], and [Block Damage] buffs.`,
          damage: "2.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Inexorable [P]",
          description: `Instantly resets the cooldown on one of this Champion’s random active skills, whenever an enemy increases the cooldown of any of their skills. Grants an Extra Turn if a skill’s cooldown was reset. After granting an Extra Turn, places this skill on cooldown. <br><br>Will also grant an Extra Turn if an ally, Mastery, Artifact Set, or Accessory decreases the cooldown of any of this Champion’s skills. After granting an Extra Turn, places this skill on cooldown.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 707",
        "DEF": "815",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 24%`,
};
