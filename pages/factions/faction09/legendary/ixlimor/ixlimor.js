const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feast of Flame",
          description: `Attacks 1 enemy. Heals this Champion by 25% of the damage inflicted. Heals this Champion by 50% of the damage inflicted instead if the target is under a [HP Burn] debuff.<br><br><br>Heal Multiplier: !RelationTargetHasEffectOfKind(AoEContinuousDamage_KindId)*0.25*Damage Dealt+RelationTargetHasEffectOfKind(AoEContinuousDamage_KindId)*0.5*Damage Dealt`,
          damage: "2.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hellfire Torrent",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff on all enemies for 3 turns.`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Infernal Minions",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Places a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fires of Doom [P]",
          description: `Decreases damage inflicted by enemies under [HP Burn] debuffs by 10%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "771",
        "DEF": "1 343",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
