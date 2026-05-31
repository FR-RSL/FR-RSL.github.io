const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Elderspear",
          description: `Attacks 1 enemy. Has a 50% chance of increasing the cooldown of one of the target’s skills by 2 turns at random. The chance increases to 100% if the target has 50% HP or less.`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stampede",
          description: `Attacks all enemies. Has a 75% chance of placing a [Provoke] debuff for 1 turn. Also places a [Block Damage] buff on this Champion for 1 turn.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shield of the Clans",
          description: `Places a 50% [Increase RES] buff and a 30% [Reflect Damage] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brawny Surge [P]",
          description: `This Champion’s RES is increased by 50 whenever their active skills are not on cooldown.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "870",
        "DEF": "1 178",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 60`,
};
