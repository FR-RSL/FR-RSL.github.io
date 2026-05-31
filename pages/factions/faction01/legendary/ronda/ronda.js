const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flaming Flurry",
          description: `Attacks 1 enemy 3 times. Places an extra hit if the target has less than 50% HP after the third hit.`,
          damage: "1.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Phase Rushdown",
          description: `Attacks 1 enemy 3 times. Will ignore [Shield] buffs and 30% of the target's DEF. <br><br>Places a [Block Passive Skills] debuff for 2 turns before attacking. This debuff cannot be resisted. <br><br>Also places a [Block Active Skills] debuff for 2 turns after attacking. This debuff cannot be resisted.`,
          damage: "1.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fury Tremor",
          description: `Attacks all enemies 2 times. Damage increases by 30% if this Champion has more than 50% HP. <br><br>[Passive Effect] Immune to Turn Meter reduction effects from enemies when this skill is not on cooldown. <br><br>Decreases all Turn Meter reduction effects from enemies used against this Champion by 50% when this skill is on cooldown.`,
          damage: "1.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "In Your Corner",
          description: `Has a 15% chance to join an attack whenever an ally attacks an enemy. This Champion will attack with their default skill. <br><br>At the start of each Round, places a [Shield] buff on this Champion for 2 turns equal to 40% of their MAX HP.<br><br>Shield Multiplier: 0.4*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 542",
        "DEF": "1 046",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in all Battles by 30%`,
};
