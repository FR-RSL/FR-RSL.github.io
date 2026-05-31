const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Envenomed Sickles",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit has a 15% chance of increasing the duration of all enemy debuffs by 1 turn. If the 2nd hit does not increase the duration of all enemy debuffs, instantly activates all [Poison] debuffs on the target instead.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: +20% Damage", "Level 3: +10% Buff/Debuff Chance", "Level 4: +15% Buff/Debuff Chance"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "They Will Regret...",
          description: `Attacks 1 enemy 2 times. Before attacking, places a 50% [Increase ACC] buff on this Champion for 2 turns.<br><br>The first hit has a 75% chance of placing a 25% [Poison Sensitivity] debuff and two 5% [Poison] debuffs for 2 turns.<br><br>The second hit applies a [Debuff Spread] effect, taking all [Poison] debuffs and the [Poison Sensitivity] debuff from the target and placing them on all other enemies.`,
          damage: "2.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: +20% Damage", "Level 3: +10% Buff/Debuff Chance", "Level 4: +15% Buff/Debuff Chance", "Level 5: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Toxic Vitriol",
          description: `Attacks all enemies.<br><br>Places a 50% [Decrease ATK] debuff on all enemies for 2 turns. Increases this Champion’s Turn Meter by 20% for each [Decrease ATK] debuff placed.<br><br>Instantly activates all [Poison] debuffs on all enemies.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: +10% Damage", "Level 3: +10% Damage", "Level 4: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Imbibed Immunity [P]",
          description: `This Champion is immune to [Poison], [Stun], and [Decrease SPD] debuffs.<br><br>Increases this Champion’s damage dealt by 5% (stacks up to 50%) and Ignore DEF effect by 3% (stacks up to 30%) for each active debuff on the enemy team.<br><br>Whenever this Champion is attacked by an enemy under a debuff placed by this Champion, counterattacks using their default skill.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 542",
        "DEF": "991",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in all Battles by 70`,
};
