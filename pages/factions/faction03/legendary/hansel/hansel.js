const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Purge All Evil",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 25% [Weaken] debuff for 2 turns. <br><br>If Gretel Hagbane is on the same team, attacks all enemies instead. Has a 25% chance of placing a 25% [Weaken] debuff on all enemies for 2 turns. Also places an extra hit on enemies under any debuffs.`,
          damage: "3.5*ATKMultiplier: 2.3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sanctified Knives",
          description: `Attacks 1 enemy 2 times. Will ignore [Shield] and [Unkillable] buffs. <br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "2.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Baneful Burst",
          description: `Attacks all enemies. Will ignore 15% of each target’s DEF. Also increases the cooldown of 1 random skill on each enemy by 2 turns. <br><br>If Gretel Hagbane is on the same team, will ignore 30% of each target’s DEF instead. Will also increase the cooldown of all enemy skills by 2 turns instead. This cooldown-increasing effect cannot be resisted.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brotherly Bond [P]",
          description: `[Passive Effect]<br><br>Reflects all [Fear] and [True Fear] debuffs from this Champion to the attacker.<br><br>If Gretel Hagbane is on the same team, also reflects all [Fear] and [True Fear] debuffs placed on Gretel Hagbane back to the attacker.<br><br>[Active Effect]<br><br>If Gretel Hagbane is on the same team and is killed by the enemy, instantly activates the [Baneful Burst] skill.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 669",
        "DEF": "914",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 33%`,
};
