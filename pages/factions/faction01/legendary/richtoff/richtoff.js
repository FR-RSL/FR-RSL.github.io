const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ruination",
          description: `Attacks all enemies. Destroys each target's MAX HP by 30% of the damage inflicted.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bloodletting",
          description: `Attacks 1 enemy 3 times. Each hit places a 5% [Poison] debuff on all enemies for 2 turns.`,
          damage: "1.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cursehold",
          description: `Attacks 1 enemy. Critical damage increases by 20% for each Poison debuff on the target. Stacks up to 100%.`,
          damage: "6.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 398",
        "DEF": "925",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 27%`,
};
