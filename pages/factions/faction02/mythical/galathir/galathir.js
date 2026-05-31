const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Astral Storm",
          description: `Attacks all enemies.<br><br>Fills the Turn Meters of all allies by 10%. Also fills the Turn Meter of each ally by an extra 5% if they have any active buffs placed on them by this Champion.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stellar Embryo",
          description: `Removes all debuffs from all allies, then heals them by 25% of this Champion’s MAX HP. <br><br>Also fills the Turn Meters of all allies by 15%, and places a [Block Debuffs] buff on them for 2 turns.<br><br><br>Heal Multiplier: 0.25*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Part the Veil",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter. <br><br>Also places a [Perfect Veil] buff on all allies, except this Champion, for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
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
          name: "Eternal Beyonder [P]",
          description: `3 Turns<br><br>[Passive Effect] <br><br>This Champion receives 5% less damage for each 100 RES on this Champion (stacks up to 25%). <br><br>[Active Effect] <br><br>Prevents this Champion's death and keeps them alive on 1 HP when receiving fatal damage, then equalizes their HP. The HP level of this Champion will be brought up to the average HP level of the team.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 305",
        "ATQ": "1 013",
        "DEF": "1 354",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Increases Ally RES in all Battles by 80`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Uncreation Beam",
          description: `Attacks all enemies. <br><br>Decreases the Turn Meters of all enemies by 10%. Decreases the Turn Meter of each enemy by an extra 5% if they are under a [Block Active Skills], [Decrease RES], or [Stun] debuff placed by this Champion.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +20%", "Level 3: Ignore RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Eclipse Rend",
          description: `Attacks all enemies. Before attacking, removes all buffs from all enemies. <br><br>Then, places a [Block Active Skills] debuff for 2 turns. <br><br>This attack will not trigger counterattacks.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Dark Nebula",
          description: `Places a 50% [Increase ACC] buff on all allies for 2 turns. <br><br>Then, places a 50% [Decrease RES] debuff on all enemies for 2 turns, and a [Stun] debuff on all enemies for 1 turn.`,
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
          name: "Starlight Reflect [P]",
          description: `[Passive Effect] <br><br>Increases this Champion's ACC equal to 75% of their RES when placing debuffs or activating instant effects. <br><br>[Active Effect] <br><br>If an enemy’s ACC is higher than this Champion’s RES, has a 50% chance of transferring any [Fear], [True Fear], [Freeze], [Provoke], [Sleep], [Stun], or [Petrification] debuffs back to the enemy when placing these debuffs on this Champion.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 305",
        "ATQ": "1 013",
        "DEF": "1 354",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Increases Ally RES in all Battles by 80`,
  },
  },
};
