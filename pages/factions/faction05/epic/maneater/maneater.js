const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pummel",
          description: `Attacks 1 enemy. Places a 50% [Decrease ATK] debuff on all enemies if this attack is critical.`,
          damage: "5.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Syphon",
          description: `Attacks 1 enemy. Fully depletes the target's Turn Meter. Fills this Champion's Turn Meter equal to the amount the target loses.`,
          damage: "8.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ancient Blood",
          description: `This Champion receives damage, then places an [Unkillable] buff and a [Block Debuffs] buff on all allies for 2 turns. Damage received is equal to 5% MAX HP for each alive ally.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "837",
        "DEF": "1 112",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 33%`,
};
