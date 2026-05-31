const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Softening Drive",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charged Assault",
          description: `Attacks 1 enemy. Places a 50% [Increase ATK] buff and a 30% [Increase C. RATE] buff on this Champion for 2 turns before attacking if the target has higher MAX HP than this Champion. Will ignore DEF if the target is under a [Weaken] debuff.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unyielding Flurry",
          description: `Attacks 1 enemy 2 times. Grants an Extra Turn if the target is under [Decrease DEF] and [Weaken] debuffs.`,
          damage: "2.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unrelenting [P]",
          description: `Has a 10% chance of granting an Extra Turn whenever this Champion lands a critical hit. Increases damage inflicted on Bosses by 20%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 443",
        "DEF": "793",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 29%`,
};
