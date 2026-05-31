const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rimefire",
          description: `Attacks all enemies. Has a 15% chance of placing a [Freeze] debuff for 1 turn.<br><br>Instantly activates this Skill whenever an enemy under both a [Freeze] and a [HP Burn] debuff takes damage from the [HP Burn] debuff.`,
          damage: "2*DEF",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Iceberg Crush",
          description: `Removes all buffs from a target enemy, then attacks the target 2 times. Steals all buffs instead if the target is under a [Freeze] debuff.<br><br>Will ignore DEF if the target is under both a [Freeze] and a [HP Burn] debuff.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blizzard Rage",
          description: `Attacks all enemies. Places a [Block Buffs] debuff and a 100% [Heal Reduction] debuff for 2 turns on enemies under [Freeze] debuffs.<br><br>Has a 60% chance of placing a [Provoke] debuff for 1 turn on enemies not under [Freeze] debuffs. <br><br>Decreases the cooldown of 1 random Skill of each ally by 1 turn for every enemy attacked under both a [Freeze] and a [HP Burn] debuff.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Wintry Wind [P]",
          description: `[Passive Effect]<br><br>Has a 20% chance of placing a [Freeze] debuff on the enemy each time they receive a buff or have their Turn Meter filled. The 20% chance applies up to twice per enemy turn (once for buffs, once for Turn Meter fills) in cases where an enemy receives multiple of these effects at the same time. <br><br>Does not work with effects from Artifact Sets, Turn Meter filling effects from Masteries, healing, or those buffs or effects that take place at the start of a Round.<br><br>[Active Effect]<br><br>Revives this Champion to 100% HP when killed and places a [Freeze] debuff on this Champion for 1 turn.`,
          cooldown: 8,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "815",
        "DEF": "1 421",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "70",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 33%`,
};
