const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bewildering Blow",
          description: `Attacks 1 enemy. Has a 35% chance of placing a [Stun] debuff for 1 turn.<br><br>Will ignore 30% of the target's DEF if the target is under a [Provoke] debuff.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wave of Despair",
          description: `Attacks all enemies. Has a 75% chance to remove all buffs.<br><br>Also has a 75% chance to place a 50% [Decrease ATK] debuff and a [Hex] debuff for 2 turns.`,
          damage: "3.9*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Reign of Terror",
          description: `Attacks all enemies. Increases the duration of all debuffs on each target by 1 turn, then places a [Provoke] debuff on all enemies for 1 turn.<br><br>Places a [Shield] buff on all allies for 2 turns equal to 30% of damage inflicted, and a [Counterattack] buff on this Champion for 2 turns. Damage increases by 10% for each debuff on the target.<br><br><br>Shield Multiplier: 0.3*Damage Dealt`,
          damage: "4.9*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Shield +10%", "Level 4: Shield +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Foul Provocation [P]",
          description: `Will ignore 30% of a target's RES if the target's DEF is lower than this Champion's.<br><br>Allies deal 25% more damage to targets under a [Provoke] debuff placed by this Champion.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "848",
        "DEF": "1 421",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 44%`,
};
