const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Portable Cannonade",
          description: `Attacks 1 enemy.<br><br>Has a 80% chance of transferring 1 random debuff from this Champion to the target.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Scattershot Barrage",
          description: `Attacks all enemies.<br><br>Has a 75% chance of removing 1 random buff from all enemies.<br>Has a 75% chance of stealing 2 random buffs instead, if the target is under a [Block Buffs] or [Block Active Skills] debuff.`,
          damage: "3.85*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Beast Feller Level",
          description: `Attacks 1 enemy 3 times.<br><br>The first hit has a 75% chance of placing a [Block Buffs] debuff for 2 turns. The second hit has a 75% chance of placing a [Block Active Skills] debuff for 2 turns. The third hit has a 50% chance of applying a [Debuff Spread] effect, taking 1 random debuff from the target and placing it on all other enemies.<br><br>Lvl. 2 Damage +10%<br>Lvl. 3 Damage +10%<br>Lvl. 4 Buff/Debuff Chance +10%<br>Lvl. 5 Buff/Debuff Chance +15%<br>Lvl. 6 Cooldown -1`,
          damage: "2*ATK",
          cooldown: 5,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Eyes of a Sunseeker [P]",
          description: `This Champion deals 15% more damage to enemies whose ACC is less than this Champion's.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 365",
        "DEF": "969",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Crypts by 33%.`,
};
