const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Whirling Axe",
          description: `Attack all enemies. Places a 25% [Increase ATK] buff on this Champion for 2 turns if this attack is critical.`,
          damage: "ATK*3",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Skullclobber",
          description: `Attacks 1 enemy. Places a [Stun] debuff for 1 turn.`,
          damage: "ATK*6.5",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Withstand [P]",
          description: `Revives this Champion to 30% HP when killed and places a [Block Damage] buff for 1 turn.`,
          cooldown: 8,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 365",
        "DEF": "903",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
