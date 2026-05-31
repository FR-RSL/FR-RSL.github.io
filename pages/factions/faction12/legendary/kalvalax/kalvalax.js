const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Oozing Greatsword",
          description: `Attacks 1 enemy. Has a 40% chance of increasing the duration of all [Poison] debuffs on the target by 1 turn. Heals this Champion by 2.5% of their MAX HP for each [Poison] debuff on the target.<br><br><br>Heal Multiplier: EffectsAppliedOnRelationTargetCountOfKind(ContinuousDamage_KindId)*0.025*HP`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Corruption Locus",
          description: `Attacks 1 enemy. Places an extra hit for each [Poison] debuff on the target (up to 3 extra hits).`,
          damage: "2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Storm of Vitriol",
          description: `Attacks all enemies. Damage increases according to the number of [Poison] debuffs on each target.`,
          damage: "(3.5*ATK)+(Poison Count*0.01*Target Max HP)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pestilence [P]",
          description: `Places four 5% [Poison] debuffs on all enemies for 2 turns at the start of each round. <br><br>Has a 50% chance of placing a 5% [Poison] debuff on all enemies for 1 turn at the start of each turn. <br><br>Whenever an enemy places a [Poison] debuff on this Champion, instantly removes it and replaces it with a 15% [Continuous Heal] buff for 2 turns instead.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 663",
        "DEF": "1 068",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
