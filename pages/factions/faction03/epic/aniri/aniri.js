const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blade of Blessings",
          description: `Attacks 1 enemy. Heal the ally with the lowest HP by 5% of their MAX HP. <br><br>Cannot heal this Champion.<br><br><br>Heal Multiplier: 0.05*Target Max HP`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Heal +5%", "Level 4: Damage +5%", "Level 5: Heal +5%", "Level 6: Damage +5%", "Level 7: Heal +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Quest For Meaning",
          description: `Attacks all enemies. Heals all allies by 15% of their MAX HP, then decreases the duration of all buffs on all enemies by 1 turn and increases the duration of all buffs on all allies by 1 turn.<br><br><br>Heal Multiplier: 0.15*Target Max HP`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rise of Glory",
          description: `Revives a dead ally with 50% HP, then fills their Turn Meter by 50% and resets the cooldowns on all their skills.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Guardian Angel [P]",
          description: `[Passive Effect]<br><br>Increases the amount of healing allies receive by 10%.<br><br>[Active Effect]<br><br>If an ally is about to get killed by a fatal hit, preempts that hit and instantly places a [Revive On Death] buff on them for 1 turn before the damage is taken.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 046",
        "DEF": "1 244",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
