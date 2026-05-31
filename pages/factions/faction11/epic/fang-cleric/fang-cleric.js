const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Conduit Fangs",
          description: `Attacks 1 enemy. Has a 75% chance of transferring 1 random debuff from this Champion to the target.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shadowy Blessings",
          description: `Heals an ally by 20% of this Champion’s MAX HP. Also fills the target’s Turn Meter by 30% if they are fully healed by this Skill. Places a [Veil] buff on the target for 1 turn if they are not fully healed by this Skill.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 3,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Return to the Ranks",
          description: `Revives a dead ally with 30% HP, then fills their Turn Meter by 30%. Also places an [Unkillable] buff on the target for 1 turn and a 15% [Continuous Heal] buff for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "903",
        "DEF": "1 178",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 15%`,
};
