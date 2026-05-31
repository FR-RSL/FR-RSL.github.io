const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Breaker Suite",
          description: `Attacks 1 enemy 2 times. Has a 30% chance of repeating the attack.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "March of Tin",
          description: `Attacks all enemies. Decreases the Turn Meters of all targets by 30%. This effect cannot be resisted. <br><br>Places an [Unkillable] buff on this Champion for 1 turn if this attack kills an enemy.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Deadly Ballet",
          description: `Attacks 1 enemy. Will ignore [Strengthen], [Stone Skin], [Unkillable], [Block Damage], [Increase DEF], [Ally Protection], and [Shield] buffs. <br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "5.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Crack Any Shell [P]",
          description: `Has a 50% chance for this Champion to ignore 50% of the target's DEF from each hit placed by this Champion's skills.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 608",
        "DEF": "1 057",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
