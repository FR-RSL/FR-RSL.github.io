const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Innocent Blood",
          description: `Attacks 1 enemy. Heals this Champion by 15% of the damage inflicted.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "3.75*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Full Moon Rampage",
          description: `Attacks 1 enemy 6 times. The first hit has a 75% chance of placing a 25% [Weaken] debuff for 3 turns. Heals this Champion by 25% of the damage inflicted.<br>Heals this Champion by 50% of the damage inflicted instead if the target is under a [Fear] or a [True Fear] debuff.<br><br><br>Heal Multiplier: 0.25*Damage Dealt*!RelationTargetHasEffectOfKind(Fear_KindId)+0.5*Damage Dealt*RelationTargetHasEffectOfKind(Fear_KindId)`,
          damage: "0.97*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +15%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hunter's Howl",
          description: `Places a 50% [Increase ATK] buff on all allies for 3 turns, then attacks 1 enemy 3 times.<br><br>Each hit has a 50% chance of placing a [True Fear] debuff for 1 turn. Has a 50% chance of placing a [Fear] debuff on 2 random enemies for 1 turn if the [True Fear] debuff is placed.`,
          damage: "2.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Beast Mode [P]",
          description: `[Passive Effect]<br><br>Damage increases by 40% when this Champion's HP drops below 40%.<br><br>[Active Effect]<br><br>Revives this Champion with 20% HP when killed. Immediately grants an Extra Turn.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 465",
        "DEF": "793",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
