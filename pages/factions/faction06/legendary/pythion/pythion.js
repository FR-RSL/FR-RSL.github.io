const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rapacious Staff",
          description: `Attacks 1 enemy 2 times. Heals the ally with the lowest HP by 5% of this Champion’s MAX HP after each hit.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shed Skin",
          description: `Removes all debuffs from all allies, then heals them by 10% of their MAX HP. Heals each ally by an extra 5% of their MAX HP for each debuff removed from them. <br><br>Also places a [Block Debuffs] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: (0.1*Target Max HP)+(0.05*Target Max HP*unappliedStatusEffectsCount)`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Immortal Serpent",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter, then places a 25% [Strengthen] buff on all allies for 2 turns.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Overlay [P]",
          description: `Allies receive 5% less damage from skills for each buff on them. Stacks up to 25%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 135",
        "ATQ": "870",
        "DEF": "1 299",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 60`,
};
