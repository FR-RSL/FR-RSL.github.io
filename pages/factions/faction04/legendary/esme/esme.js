const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blade Juggler",
          description: `Attacks 1 enemy. <br><br>Places a 50% [Increase ATK] buff on all allies for 1 turn.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Earthdancer",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a 25% [Weaken] debuff and a [Block Buffs] debuff for 2 turns. <br><br>Also decreases the Turn Meters of all enemies by 20%. If Modo of the Peal is on the same team, steals 20% of each enemy’s Turn Meter instead.`,
          damage: "4.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blessing of the Sands",
          description: `Places a 50% [Increase ACC] buff and a 30% [Increase SPD] buff on all allies for 2 turns. <br><br>Has a 75% chance of removing all buffs from all enemies. If Modo of the Peal is on the same team, has a 75% chance of stealing all buffs from all enemies instead.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Beguiling Moves [P]",
          description: `[Passive Effect]<br><br>When hit, has a 15% chance of randomly changing the attacker’s critical hits to weak, normal, or strong hits. If Modo of the Peal is on the same team, the chance increases to 30%.<br><br>[Active Effect]<br><br>Whenever this Champion is hit, increases the Turn Meter of the ally with the highest ATK by 50%.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 090",
        "DEF": "1 277",
        "VIT": "113",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
