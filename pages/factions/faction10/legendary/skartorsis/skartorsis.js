const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hand of Doom",
          description: `Attacks all enemies. Has a 30% chance of stealing 1 random buff from each enemy.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Command",
          description: `Places a 50% [Increase ATK] buff and a 30% [Increase C. RATE] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rebirth",
          description: `Removes all debuffs from all allies, then heals them and fills their Turn Meters. The amount by which each ally is healed increases according to the number of debuffs removed from them. The amount by which each ally's Turn Meter is filled increases according to the number of debuffs removed from them.<br><br><br>Heal Multiplier: 0.25*Target Max HP+0.05*Target Max HP*unappliedStatusEffectsCount`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "859",
        "DEF": "1 376",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 33%`,
};
