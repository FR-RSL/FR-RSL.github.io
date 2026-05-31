const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Resounding Smash",
          description: `Attacks 1 enemy. Places an extra hit if the target has no active buffs.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Touch of Vigor",
          description: `Heals an ally by 40% of their MAX HP. Heals by 60% instead if the ally has 50% HP or less.<br><br><br>Heal Multiplier: 0.4*Target Max HP +((Current HP %<=0.5)*0.2*Target Max HP)`,
          cooldown: 3,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lulling Chant",
          description: `Has a 50% chance of removing all buffs from all enemies. Then places a [Sleep] debuff for 1 turn on all enemies who have active buffs.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 101",
        "DEF": "1 090",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all Battles by 20%`,
};
