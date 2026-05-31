const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pounce",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "1.5*ATK+0.12*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Strangle",
          description: `Attacks 1 enemy. Places a [Sleep] debuff for 2 turns if the target has no active buffs.`,
          damage: "2.5*ATK+0.2*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Herbal Balm [P]",
          description: `Places a 15% [Continuous Heal] buff on this Champion for 2 turns if incoming damage exceeds 20% HP in one attack.`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "903",
        "DEF": "760",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 22%`,
};
