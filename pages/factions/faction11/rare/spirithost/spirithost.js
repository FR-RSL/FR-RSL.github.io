const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Reap",
          description: `Attacks 1 enemy. Heals by 50% of the damage inflicted.<br><br><br>Heal Multiplier: Damage Dealt*0.5`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Strengthen",
          description: `Places a 50% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dark Gift",
          description: `Removes all debuffs on all allies. Places a [Block Debuffs] buff on all allies for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 046",
        "DEF": "958",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 10%`,
};
