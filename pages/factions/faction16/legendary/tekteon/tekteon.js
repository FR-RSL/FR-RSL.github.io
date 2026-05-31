const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fissureblades",
          description: `Attacks all enemies 2 times.<br><br>Has a 25% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "0.11*HP ×2",
          levelInfo: ["Level 2: +10% Damage", "Level 3: +10% Damage", "Level 4: +10% Buff/Debuff Chance"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Volcanic Presence",
          description: `Attacks all enemies 2 times. Before attacking, places a 15% [Shatter] buff on this Champion for 2 turns. Will ignore [Shield], [Strengthen], and [Increase DEF] buffs.<br><br>Each hit increases the cooldown of all enemy skills by 2 turns.`,
          damage: "0.15*HP",
          cooldown: 4,
          levelInfo: ["Level 2: +10% Damage", "Level 3: +10% Damage", "Level 4: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flaming Bulwark",
          description: `Places a [Taunt] buff and a [Poison Cloud] buff on this Champion for 3 turns. Also places a protected [Shield] buff equal to 30% of this Champion’s MAX HP on all allies for 2 turns.<br><br>Then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: -1 Cooldown", "Level 3: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sulfurous Breath [P]",
          description: `At the start of each Round, places a [Poison Cloud] buff on this Champion for 1 turn.<br><br>Decreases the damage this Champion receives from critical hits by 50%.<br><br>Whenever an enemy hits this Champions, increases this Champion’s MAX HP by 5%. Weak hits increase this Champion’s MAX HP by 10% instead. Stacks up to 100%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "705",
        "DEF": "1 387",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in all Battles by 33%`,
};
