const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Entrapment",
          description: `Attacks 1 enemy. <br><br>Steals 10% of the target’s Turn Meter. Steals an additional 5% Turn Meter for each debuff on the enemy. <br><br>Also has a 75% chance of placing a [True Fear] debuff for 1 turn.`,
          damage: "5*ATK",
          levelInfo: ["Level 2: Ignore RES +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soporific Musk",
          description: `Steals all buffs from all enemies. <br><br>Decreases each target's Turn Meter by 10%. Decreases each target's Turn Meter by an additional 5% for each debuff on them. <br><br>Also instantly activates one tick of all [Poison] debuffs on all enemies. <br><br>Then places a [Sleep] debuff for 1 turn on all enemies without [Poison] debuffs.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sickle of Corruption",
          description: `Attacks all enemies. <br><br>Places a 60% [Decrease DEF] debuff and a 25% [Weaken] debuff on all enemies for 2 turns. <br><br>Fills the Turn Meters of all allies by 20%.`,
          damage: "5.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Alternate Form. Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blackteeth's Buffet [P]",
          description: `Whenever an enemy receives a buff, is healed, or has their Turn Meter increased by a skill, places a 5% [Poison] debuff on that enemy for 2 turns. Will ignore [Block Debuffs] buffs. <br><br>Increases this Champion's Turn Meter by 5% for each [Poison] debuff placed by this skill.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 130",
        "ATQ": "1 013",
        "DEF": "1 299",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in Arena by 100`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Bellyslash",
          description: `Attacks 1 enemy 4 times. Each hit will ignore 30% of the target's DEF. Each hit will also decrease the target’s MAX HP by 25% of the damage inflicted. <br><br>If the target is not a Boss, also places a [Shield] buff on this Champion equal to 25% of the target’s MAX HP.<br><br><br>Shield Multiplier: 0.25*Target Max HP`,
          damage: "1*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Cut 'Em Up",
          description: `Attacks 1 enemy 2 times. Deals 100% more damage to enemies under a [Stun], [Sleep], [Freeze], [Provoke], [Fear], [True Fear], or [Petrification] debuffs. <br><br>If the target is killed, instantly activates the [Feast of Terror] skill.`,
          damage: "(!Disable Debuff*3*ATK)+(Disable Debuff*6*ATK)",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Feast of Terror",
          description: `Attacks all enemies. <br><br>Places a [True Fear] debuff for 2 turns. This debuff cannot be resisted or blocked by enemies with 50% HP or less.`,
          damage: "3.9*ATK",
          cooldown: 4,
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
          name: "Ravenous Hunger [P]",
          description: `Whenever this Champion kills an enemy using an active skill, grants this Champion an Extra Turn. <br><br>Each debuff placed by this Champion in either Form increases this Champion’s HP, ATK, and DEF by 2% (stacks up to 50%) and SPD by 2 (stacks up to 50) in their Alternate Form.`,
          cooldown: 2,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 340",
        "ATQ": "1 542",
        "DEF": "1 156",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in Arena by 100`,
  },
  },
};
