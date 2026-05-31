const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ram",
          description: `Attacks 1 enemy. Damage increases according to how much HP this Champion has lost. This attack cannot be a strong, critical, or weak hit.`,
          damage: "ATK*(2.5+3*(1-Current HP %))",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "War Drum",
          description: `Places a [Provoke] debuff on all enemies for 1 turn. Places a 30% [Increase DEF] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Determined",
          description: `Places an [Unkillable] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "958",
        "DEF": "936",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 27%`,
};
