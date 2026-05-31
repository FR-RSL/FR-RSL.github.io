const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exemplar of Stoicism",
          description: `Attacks 1 enemy. If there are any enemies under a [Freeze] debuff, also attacks them. <br><br>Decreases the enemy’s ATK by 3% whenever this Champion hits an enemy with this skill (stacks up to 30%). <br><br>Also increases this Champion’s ATK by 3% whenever they hit an enemy with this skill (stacks up to 30%).`,
          damage: "3.5*ATKMultiplier: 3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cold Company",
          description: `Attacks all enemies. Before attacking, has a 100% chance of placing a [Freeze] debuff for 1 turn.<br><br>Will ignore [Strengthen], [Ally Protection] and [Unkillable] buffs, as well as 20% of the target's DEF on enemies under a [Freeze] debuff.`,
          damage: "4.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ever Faithful",
          description: `Places a 50% [Increase ATK] buff, a 30% [Increase C. RATE] buff, a [Shield] buff, and a 50% [Increase ACC] buff on this Champion for 3 turns, then grants an Extra Turn. <br><br>The value of the [Shield] is proportional to this Champion's ATK.<br><br><br>Shield Multiplier: 4*ATK`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Frosty Glare [P]",
          description: `Has a 15% chance of placing a [Freeze] debuff on attackers for 1 turn when hit while under a [Shield] buff. <br><br>Has a 35% chance of placing a [Freeze] debuff on all enemies for 1 turn whenever a [Shield] buff on this Champion is removed by damage.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 597",
        "DEF": "903",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 35%`,
};
