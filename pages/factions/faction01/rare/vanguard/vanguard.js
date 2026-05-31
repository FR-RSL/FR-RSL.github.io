const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gathering Momentum",
          description: `Attacks 1 enemy. Places a 30% [Decrease DEF] debuff for 1 turn if the target’s DEF is lower than this Champion’s.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Inescapable Wrath",
          description: `Attacks 1 enemy. Places a [Provoke] debuff for 1 turn if the target is under a [Decrease DEF] debuff.`,
          damage: "6.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dismay the Foe [P]",
          description: `Decreases the duration of all buffs on the attacker when hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "958",
        "DEF": "1 090",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `
Increases Ally RES in All Battles by 30`,
};
