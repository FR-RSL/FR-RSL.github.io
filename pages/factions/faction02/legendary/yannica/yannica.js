const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Even the Odds",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of placing a [Leech] debuff for 2 turns. <br><br>Attacks all enemies 2 times instead if this Champion is under a [Veil] buff.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Baffling Speed",
          description: `Attacks 1 enemy. Places a [Perfect Veil] buff on this Champion for 3 turns if this attack is critical. Grants an Extra Turn.`,
          damage: "6.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Elven Judgment",
          description: `Attacks all enemies. Will ignore [Shield] buffs. <br><br>Removes [Shield] buffs from targets if this Champion is under a [Veil] buff or [Perfect Veil] buff, then deals extra damage equal to 15% of the value of the removed [Shield] buffs.`,
          damage: "3.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 487",
        "DEF": "1 057",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in all Battles by 30%`,
};
