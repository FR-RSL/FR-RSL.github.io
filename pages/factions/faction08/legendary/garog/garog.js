const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gigantic Cleavers",
          description: `Attacks 1 enemy 2 times. <br><br>Has a 50% chance of placing a [Stun] debuff for 1 turn. The chance increases to 75% if the target's Turn Meter is equal to or higher than 50%.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hack to Bits",
          description: `Attacks 1 enemy 4 times. <br><br>Each hit will ignore 20% of the target's DEF. Each critical hit has a 50% chance to decrease the cooldown of the Gore Maker skill by 1 turn.`,
          damage: "1.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gore Maker",
          description: `Attacks all enemies. <br><br>Will ignore 20% of each target's DEF. Will ignore a further 5% of DEF for each buff on this Champion.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "War Machine [P]",
          description: `Increases this Champion's SPD by 6 (stacks up to 30) and C. DMG by 7% (stacks up to 35%) for each enemy this Champion kills in a Round. Will not reset if this Champion is killed.<br><br>Whenever an enemy Champion is revived, fills this Champion's Turn Meter by 30% for each revived enemy, then places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 564",
        "DEF": "947",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
