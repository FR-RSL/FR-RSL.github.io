const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Metabolize",
          description: `Attacks 1 enemy. Heals by 20% of the damage inflicted if the target has a [Poison] debuff.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tendon Slash",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "6.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Toxic Nova",
          description: `This Champion receives damage equal to 99% of their current HP. Places an [Unkillable] buff on this Champion for 2 turns. Has an 80% chance of placing four 5% [Poison] debuffs on all enemies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 310",
        "DEF": "859",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 40`,
};
