const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Hatespine",
          description: `Attacks 1 enemy 2 times. Will repeat the attack against the enemy with the highest Turn Meter if the initial target is under a [Leech] debuff.`,
          damage: "2.3*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crimson Steel",
          description: `Attacks all enemies. Places a [Stun] debuff for 1 turn, and decreases the Turn Meters of all enemies by 50%. These effects cannot be resisted by targets whose ATK is lower than this Champion's.`,
          damage: "4.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hemaelstrom",
          description: `Attacks all enemies. Before attacking, removes all buffs from enemies. This effect cannot be resisted by targets whose ATK is lower than this Champion's.<br><br>Places a [Leech] debuff and a 50% [Decrease ATK] debuff on all enemies for 2 turns. These debuffs cannot be resisted by targets whose ATK is lower than this Champion's.`,
          damage: "4.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Alternate Form whenever this Champion is revived by a skill, effect, or [Revive On Death] buff. Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Engine of Murder [P]",
          description: `Whenever an enemy has their Turn Meter filled, this Champion inflicts pure damage on that enemy equal to 3% of their MAX HP for every 10% Turn Meter filled. Will inflict 6% of their MAX HP as pure damage instead, if the enemy is under a [Leech] debuff. This damage cannot be critical and will ignore [Stone Skin], [Ally Protection], [Shield], [Strengthen], and [Fervor] buffs, [Bone Armor] stacks, and any damage modifying skills or effects. If the enemy is a Boss, the damage cannot exceed 50,000 per hit.<br><br>Whenever an enemy has their Turn Meter filled, also destroys their SPD by 3 for every 10% Turn Meter filled (stacks up to 100). Will destroy 6 SPD for every 10% Turn Meter filled instead, if the enemy is under a [Leech] debuff. This effect does not work against bosses. Revives this Champion with 100% HP every 2 turns if at least one ally is alive. Once per Round, instantly revives this Champion with 100% HP if all allies are dead.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "18 165",
        "ATQ": "1 487",
        "DEF": "1 156",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in all battles by 35%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Dreadneedle",
          description: `Attacks 1 enemy 2 times. Will ignore 10% of the target's DEF. Will ignore 20% of the target's DEF instead if the target's ATK is lower than this Champion's. The damage inflicted by this skill increases by 5% for each debuff on the target.`,
          damage: "ATK*(0.5*SPD/100)",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Serrated Sword",
          description: `Attacks 1 enemy 2 times. Will ignore 50% of the target's DEF. Will ignore 100% of the target's DEF instead if the target's ATK is lower than this Champion's. Will also ignore [Block Damage] and [Unkillable] buffs if the target is under a [Heal Reduction] debuff.<br><br>If this skill kills an enemy, heals this Champion by 100% of their MAX HP, and will repeat the attack on a random target under a [Fear] or [True Fear] debuff. Occurs once per skill.`,
          damage: "ATK*(0.75*SPD/100)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "A thousand Wings",
          description: `Attacks all enemies. Places a 100% [Heal Reduction] debuff and a [True Fear] debuff on all enemies for 2 turns. Will ignore [Block Debuffs] buffs. These debuffs cannot be resisted by targets whose ATK is lower than this Champion's. Will also ignore 20% of each target's DEF if the target's ATK is lower than this Champion's.`,
          damage: "ATK*(1+SPD/100)",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Base Form. Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Fueled by Blood [P]",
          description: `Heals this Champion by 1% of their MAX HP for every 1% of Turn Meter filled by enemies. Will heal this Champion by 2% of their MAX HP for every 1% of Turn Meter filled by enemies instead, if this Champion's ATK is higher than the enemy's.<br><br>Increase this Champion's SPD by 3 for every 1% of Turn Meter filled by enemies (stacks up to 100). Will increase this Champion's SPD by 6 for every 1% of Turn Meter filled by enemies instead, if this Champion's ATK is higher than the enemy's.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "15 690",
        "ATQ": "1 905",
        "DEF": "903",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in all battles by 35%`,
  },
  },
};
