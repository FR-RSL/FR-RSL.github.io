const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Shadow Lash",
          description: `Attacks 1 enemy with 1 random ally from the Shadowkin Faction. The ally joining the attack will use their default skill.<br><br>Places a [Shield] buff equal to 10% of this Champion's MAX HP on the ally with the lowest HP for 2 turns.<br><br><br>Shield Multiplier: 0.1*HP`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Silkensnare",
          description: `Attacks all enemies. Decreases the duration of all enemy buffs and all ally debuffs by 1 turn. <br><br>Then, increases the duration of all enemy debuffs and all ally buffs by 1 turn.`,
          damage: "3.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Imperial Decree",
          description: `Places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on all allies for 2 turns, then teams up with all allies to attack a single enemy. The allies joining the attack will use their default skills.`,
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
          name: "Will of the Mikage [P]",
          description: `At the start of this Champion’s turn, removes all debuffs from the ally with the highest ATK.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "21 645",
        "ATQ": "1 200",
        "DEF": "1 211",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in All Battles by 80`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Nightmare Spider",
          description: `Attacks 1 enemy. Places a [Sleep] debuff for 1 turn. <br><br>Also decreases the target’s Turn Meter by 15%.`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Skittering Death",
          description: `Attacks all enemies. Places a [Stun] debuff for 1 turn. <br><br>Also decreases the Turn Meters of all enemies by 30%.`,
          damage: "3.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Doom of Yakai",
          description: `Places a 50% [Increase ACC] buff on all allies for 2 turns.<br><br>Also removes all buffs from all enemies, and places a 25% [Weaken] debuff on them for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
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
          name: "Demonic Glower [P]",
          description: `At the start of this Champion’s turn, decreases the Turn Meter of the enemy with the highest ATK by 15%.`,
          levelInfo: ["Level 2: Ignore RES +20%"],
          isPassive: true
        }
      ],
    stats: {
        "PV": "21 645",
        "ATQ": "1 200",
        "DEF": "1 211",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Increases Ally ACC in All Battles by 80`,
  },
  },
};
