const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bolstering Blow",
          description: `Attacks 1 enemy.<br><br>Heals the ally with the lowest HP by 15% of the damage inflicted.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Song of Triumph",
          description: `Attacks 1 enemy.<br><br>Places a 15% [Continuous Heal] buff on the 2 allies with the lowest HP for 2 turns if this attack is critical.`,
          damage: "5.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hymn of Rebirth",
          description: `Revives 2 random allies with 50% HP and places a [Veil] buff on them for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "1 024",
        "DEF": "1 013",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 25%`,
};
