const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Swamp Club",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Potent Stench",
          description: `Attacks all enemies. Has a 50% chance of placing a [Provoke] debuff for 1 turn. The chance increases by 5% for each debuff on the enemy team.`,
          damage: "0.2*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bog Blessing",
          description: `Places a [Shield] buff equal to 15% of this Champion’s MAX HP and a 50% [Ally Protection] buff on all allies except this Champion for 2 turns.<br><br>Also heals this Champion by 25% of their MAX HP and places a 30% [Reflect Damage] buff on them for 3 turns.<br><br>The heal increases by 2.5% for each [Poison] debuff on the enemy team.<br><br><br>Shield Multiplier: 0.15*HPHeal Multiplier: (0.25+0.025*EnemyTeamAppliedEffectsTotalCountOfKind(ContinuousDamage_KindId))*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +10%", "Level 4: Shield +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Toxic Blood [P]",
          description: `When attacked, has a 50% chance of placing a 5% [Poison] debuff on the attacker for 2 turns. Occurs once per hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "892",
        "DEF": "958",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 40`,
};
