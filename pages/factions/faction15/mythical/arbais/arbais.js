const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Bladegale",
          description: `Attacks all enemies. Has a 40% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "3.75*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Verdant Rebirth",
          description: `Removes all buffs from all enemies. Increases the duration of all ally buffs by 1 turn. <br><br>Then places a [Revive On Death] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Harmonious Whisper",
          description: `Fills the Turn Meters of all allies by 30% and places a 50% [Increase ATK] buff and a 50% [Increase ACC] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
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
          name: "Stonethorn's Embrace [P]",
          description: `Has a 30% chance of placing a [Petrification] debuff on an attacker for 1 turn, whenever an ally is attacked while under a [Revive On Death] buff placed by this Champion.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 305",
        "ATQ": "980",
        "DEF": "1 387",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in All Battles by 25%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Boulder Hurl",
          description: `Attacks 1 enemy. Decreases the target’s Turn Meter by 30%. <br><br>Then places a 15% [Continuous Heal] buff on this Champion for 1 turn. Also places a 15% [Continuous Heal] buff on the ally with the lowest HP except this Champion for 1 turn.`,
          damage: "0.27*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Briarburn",
          description: `Attacks all enemies. Places a [Leech] debuff and a [HP Burn] debuff for 2 turns.`,
          damage: "0.25*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Roar of the Mistwood",
          description: `Places two 15% [Continuous Heal] buffs on all allies for 2 turns. <br><br>Also places a [Taunt] buff on this Champion for 2 turns, as well as a [Stone Skin] buff for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
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
          name: "Tanglethorn [P]",
          description: `When attacked, places a 30% [Decrease SPD] debuff on the attacker for 2 turns. Occurs once per hit. <br><br>Also decreases the damage taken by all allies from skills by 20%. This Champion will receive that damage instead.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 955",
        "ATQ": "958",
        "DEF": "1 299",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in All Battles by 25%`,
  },
  },
};
