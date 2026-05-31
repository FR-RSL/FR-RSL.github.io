const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Profane Glaive",
          description: `Attacks 1 enemy 2 times. Has a 40% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blades of Blood",
          description: `Attacks all enemies. Has a 50% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "3.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Harvest of Despair",
          description: `Attacks all enemies. Places a 30% [Increase SPD] buff on this Champion for 3 turns if this attack kills 4 or more enemies.<br>Heals this Champion by 50% of their MAX HP if this attack kills 6 or more enemies.<br>Grants an Extra Turn if this attack kills 10 or more enemies.<br><br><br>Heal Multiplier: 0.5*Target Max HP`,
          damage: "3.65*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 465",
        "DEF": "925",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 20%`,
};
