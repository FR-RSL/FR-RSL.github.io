const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Protective Cleave",
          description: `Attacks 1 enemy. <br><br>Places a [Shield] buff on this Champion equal to 10% of the damage dealt for 2 turns. Also heals this Champion by 10% of the damage dealt if their HP is less than 50%.<br><br><br>Shield Multiplier: 0.1*Damage Dealt<br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Paralyzing Stakes",
          description: `Attacks all enemies 2 times. <br><br>The first hit has a 75% chance of placing a [Block Active Skills] debuff for 2 turns. The second hit has a 75% chance of placing a [True Fear] debuff for 1 turn if enemies are not under a [Block Active Skills] debuff.`,
          damage: "2.1*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Glimmering Gold",
          description: `Places a 30% [Increase C. DMG] buff on this Champion for 3 turns, and a 50% [Increase ACC] buff on this Champion for 2 turns.<br><br>Then, grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Strike at the Heart [P]",
          description: `Ignores 10% of DEF when attacking Support, DEF, and HP Champions. <br><br>[Does not work against Bosses]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 432",
        "DEF": "991",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in all Battles by 40`,
};
