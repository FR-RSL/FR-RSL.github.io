const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Stoke Anguish",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit decreases the target's DEF by 2% (stacks up to 20%). <br><br>Each hit also steals 10% of the target's Turn Meter.`,
          damage: "0.11*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Agony Overwhelming",
          description: `Attacks all enemies. Removes all buffs from all enemies and places a [Block Active Skills] debuff on them for 2 turns. <br><br>Also steals 20% of the Turn Meter from each enemy under a [Block Active Skills] debuff.`,
          damage: "0.22*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Thief of Joy",
          description: `Attacks 1 enemy. Steals 100% of the target’s Turn Meter. <br><br>Also, puts the target's skills on cooldown.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%", "Level 4: Cooldown -1"],
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
          name: "Dramatis Miserae [P]",
          description: `Whenever this Champion loses 30% HP or more in a single turn, deals damage to the attacker equal to 30% of this Champion’s MAX HP. Occurs once per turn. <br><br>Also when this Champion loses 30% HP or more in a single turn, places a [Shield] buff on them, equal to 30% of this Champion’s MAX HP, for 2 turns.<br><br>Shield Multiplier: 0.3*HP`,
          damage: "0.3*HP",
          isPassive: true
        }
      ],
    stats: {
        "PV": "21 975",
        "ATQ": "1 035",
        "DEF": "1 354",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in All Battles by 80`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Volatile Performer",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 50% chance of placing a [Bomb] debuff for 2 turns. <br><br>Heals this Champion by 10% of their MAX HP for each [Bomb] debuff placed.<br><br><br>Bomb Multiplier: 0.15*HPHeal Multiplier: 0.1*HP`,
          damage: "0.12*HP",
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Explosive Showstopper",
          description: `Attacks all enemies. <br><br>Places 2 [Bomb] debuffs on all enemies for 2 turns. <br><br>Instantly detonates all [Bomb] debuffs on enemies with [Stone Skin] buffs or enemies whose HP is less than this Champion’s HP. <br><br>Then, places a [Stun] debuff for 1 turn on all enemies who had their [Bomb] debuffs detonated by this skill.<br><br><br>Bomb Multiplier: 0.33*HP`,
          damage: "0.25*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Killer Encore",
          description: `Heals this Champion by 50% of their MAX HP. <br><br>Also places a 25% [Weaken] debuff on all enemies for 2 turns. <br><br>Then grants an Extra Turn.<br><br><br>Heal Multiplier: 0.5*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%"],
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
          name: "The Last Laugh [P]",
          description: `Has a 100% chance to reflect all [Bomb] debuffs placed on this Champion back to an attacker. Also has a 30% chance to reflect all other debuffs placed on this Champion back to an attacker. <br><br>Heals this Champion by 20% of their MAX HP whenever an enemy is killed by a [Bomb] debuff.<br><br>Heal Multiplier: 0.2*HP`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 625",
        "ATQ": "958",
        "DEF": "1 321",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in All Battles by 80`,
  },
  },
};
