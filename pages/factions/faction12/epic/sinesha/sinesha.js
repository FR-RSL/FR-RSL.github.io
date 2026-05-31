const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Burning Wave",
          description: `Attacks all enemies. Places an extra hit on enemies with less than 50% HP after the first hit.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vaporize",
          description: `Attacks 1 enemy. Puts the target's skills on cooldown. Heals the ally with the lowest HP by 25%.<br><br><br>Heal Multiplier: Target Max HP*0.25`,
          damage: "6.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Immortality",
          description: `Equalizes the HP of all allies. The HP levels of all allies will be brought up to the level of the ally with the highest HP. Then heals the target ally by 10% of their MAX HP.<br><br><br>Heal Multiplier: 0.1*Target Max HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Heal +15%", "Level 5: Heal +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "892",
        "DEF": "1 255",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 31%`,
};
