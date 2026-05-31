const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Skull Clapper",
          description: `Attacks 1 enemy 2 times. <br><br>Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ear-Splitter",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a [Stun] debuff for 1 turn. <br><br>Places an extra hit on enemies under [Stun] debuffs. If Esme the Dancer is on the same team, will always place an extra hit and ignore 20% of each enemy’s DEF.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Peal of Breaking",
          description: `Attacks all enemies. Will ignore [Shield] buffs. <br><br>Damage increases by 75% while attacking enemies under [Stone Skin] buffs. <br><br>If this attack removes one or more [Stone Skin] buffs, grants this Champion an Extra Turn.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Beloved Companion [P]",
          description: `Whenever this Champion kills an enemy, places a [Stun] debuff on the enemy with the highest Turn Meter for 2 turns. Occurs once per skill. <br><br>If Esme the Dancer is on the same team, this Champion’s skills will ignore 50% of each enemy’s RES. Also, if Esme the Dancer is on the same team, places an [Intercept] stack on this Champion at the start of their turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 498",
        "DEF": "1 057",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 30%`,
};
