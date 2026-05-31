const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Curse of Longing",
          description: `Attacks 1 enemy. Has an 80% chance of placing a [Sleep] debuff for 1 turn if the target’s Turn Meter is equal to or above 50%. This debuff cannot be resisted. Heals all allies by 5% of their MAX HP if the target’s Turn Meter is below 50%.<br><br><br>Heal Multiplier: 0.05*Target Max HP`,
          damage: "5*ATK",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Whirlwind Romance",
          description: `Places a [Block Debuffs] buff on all allies for 2 turns, then fills the Turn Meters of all allies by 10% and places a 60% [Increase DEF] buff and a 30% [Increase SPD] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Love Beyond Death",
          description: `Revives a single ally with 55% HP and a full Turn Meter. Places a 50% [Increase ATK] buff and a 30% [Increase C. RATE] buff on that ally for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Eternal Bond [P]",
          description: `Heals each ally by 10% of their MAX HP at the start of their turn. <br><br>Has a 40% chance of removing any [Freeze], [Fear] and [True Fear] debuffs from each ally at the start of their turn. Removes all debuffs from Rotos the Lost Groom at the start of their turn if they are on the same team.<br><br><br>Heal Multiplier: 0.1*Target Max HP`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "859",
        "DEF": "1 288",
        "VIT": "114",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 80`,
};
