const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Excoriating Edge",
          description: `Attacks 1 enemy 2 times. <br><br>The first hit transfers all debuffs from this Champion to the target. The second hit then increases the duration of all debuffs on the target by 1 turn.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Seraphic Wave",
          description: `Attacks all enemies. Each critical hit fills this Champion’s Turn Meter by 25%. <br><br>Resets the cooldown of the Rage of the Nephilim skill if this attack kills an enemy. <br><br>Resets the cooldown of all of this Champion’s skills if this attack kills 2 or more enemies.`,
          damage: "4.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rage of the Nephilim",
          description: `Attacks 1 enemy. Ignores 50% of the target's DEF. Will attack all remaining enemies with any surplus damage if the initial target is killed. <br><br>Fully heals this Champion if the initial hit kills an enemy.<br><br><br>Heal Multiplier: 1*HP`,
          damage: "6*ATKMultiplier: Remaining Damage Amount",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Metamorph [P]",
          description: `Transforms this Champion into their Alternate Form, whenever their last living ally is killed. <br><br>Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Stay the Blade [P]",
          description: `If this Champion is about to get killed by a fatal hit, blocks incoming damage and places a [Block Damage] buff on this Champion for 2 turns. <br><br>Then, heals this Champion by 50% of their MAX HP and fills their Turn Meter by 100%.<br><br>Heal Multiplier: 0.5*HP`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 350",
        "ATQ": "1 663",
        "DEF": "1 101",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in All Battles by 35%`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Burn It Out",
          description: `Attacks all enemies. Heals all allies by 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Nephilic Ward",
          description: `Removes all debuffs from all allies. <br><br>Then heals all allies by 30% of their MAX HP and places a [Block Debuffs] buff on them for 2 turns.<br><br><br>Heal Multiplier: 0.3*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Light of the Beyond",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter, then places a [Block Damage] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
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
          name: "Shield of Defiance [P]",
          description: `Decreases damage taken from skills by 20%.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 640",
        "ATQ": "1 112",
        "DEF": "1 365",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Increases Ally ATK in All Battles by 35%`,
  },
  },
};
