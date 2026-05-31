const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exemplar of Strikes",
          description: `Attacks 1 enemy 2 times. Each hit transfers a random debuff from this Champion to the target.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Let None Live",
          description: `Attacks all enemies. Damage increases by 10% for each debuff on each target. <br><br>Resets the cooldown of the [Crack Shot] skill if this attack kills an enemy.`,
          damage: "4*ATK*(1+0.1*Target Debuffs)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crack Shot",
          description: `Attacks 1 enemy. Will ignore [Ally Protection], [Strengthen], and [Shield] buffs. <br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "6*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Implacable [P]",
          description: `Immune to [Decrease ATK] debuffs. Inflicts 20% more damage against targets whose ATK is lower than this Champion’s ATK.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 509",
        "DEF": "1 145",
        "VIT": "102",
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
