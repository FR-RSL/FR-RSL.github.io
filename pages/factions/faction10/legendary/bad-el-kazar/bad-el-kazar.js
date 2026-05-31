const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dark Sphere",
          description: `Attacks all enemies. Heals this Champion and all allies by 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "2.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Heal +10%", "Level 5: Damage +10%", "Level 6: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malice",
          description: `Removes all debuffs from all allies. Places two 15% [Continuous Heal] buffs on all allies for 2 turns. Places two 5% [Poison] debuffs on all enemies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Prey Upon [P]",
          description: `All allies inflict 20% more damage against targets under [Poison] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "1 079",
        "DEF": "1 156",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 25%`,
};
