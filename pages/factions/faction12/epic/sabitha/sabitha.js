const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dawnspear",
          description: `Attacks 1 enemy.<br><br>Heals the ally with the lowest HP by 10% of this Champion's MAX HP.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fortifying Ray",
          description: `Places a 60% [Increase DEF] buff and a 50% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shimmer of Life",
          description: `Revives an ally with 25% HP and 100% Turn Meter. <br><br>Also places a [Block Damage] buff on that ally for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rising Fate [P]",
          description: `Whenever this Champion revives an ally, decreases the cooldown of one of this Champion's skills by 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "837",
        "DEF": "1 288",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
