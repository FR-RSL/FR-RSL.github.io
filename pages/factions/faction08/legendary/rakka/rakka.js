const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ichor of Life",
          description: `Attacks 1 enemy. Heals the ally with the lowest HP by 10% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Damage +10%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Oozing Blessing",
          description: `Removes all debuffs from all allies, then places a 50% [Increase ATK] buff and a [Shield] buff equal to 25% of this Champion’s MAX HP on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.25*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +10%", "Level 3: Shield +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Plasm Rebirth",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter, then places a [Block Debuffs] buff on all allies for 2 turns. Will place the [Block Debuffs] buff even if there are no dead allies.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Creep [P]",
          description: `[Active Effect]<br><br>At the start of each turn, fills the Turn Meters of all allies by 10%.<br><br>[Passive Effect]<br><br>At the start of each turn, places a 15% [Continuous Heal] buff on the ally with the lowest HP for 2 turns. Will not place the [Continuous Heal] buff on this Champion.`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 134",
        "DEF": "1 134",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
