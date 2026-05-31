const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fyrshot",
          description: `Attacks 1 enemy. <br><br>Has a 50% chance of decreasing the duration of a [Bomb] debuff by 1 turn. <br><br>Also has a 25% chance of placing a [Bomb] debuff on a random enemy for 1 turn. Instantly detonates the [Bomb] debuff placed on that random enemy.<br><br>All [Bomb] debuffs placed by this skill on enemies whose MAX HP is higher than 200,000 will deal 20% more damage.<br><br><br>Bomb Multiplier: (Target Max HP>200000)*4.2*ATK+(Target Max HP<=200000)*3.5*ATK`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tracer Slugs",
          description: `Attacks 1 enemy 2 times. <br><br>The first hit has a 75% chance of placing 2 [Bomb] debuffs that detonate after 2 turns. The second hit has a 55% chance of applying a [Debuff Spread] effect, taking 1 [Bomb] debuff and placing it on all other enemies.<br><br>All [Bomb] debuffs placed by this skill on enemies whose MAX HP is higher than 200,000 will deal 50% more damage.<br><br><br>Bomb Multiplier: (Target Max HP>200000)*7.5*ATK+(Target Max HP<=200000)*5*ATK`,
          damage: "2.7*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Eruptive Volley",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% [Weaken] debuff for 2 turns. <br><br>Grants an Extra Turn if [Weaken] was placed on all enemies by this skill.`,
          damage: "3.8*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Explosive Phoenix [P]",
          description: `Places a [Revive On Death] buff on this Champion for 2 turns when an enemy dies from a [Bomb] debuff.`,
          cooldown: 6,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 542",
        "DEF": "881",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
