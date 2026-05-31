const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pillage",
          description: `Attacks 1 enemy. Has a 30% chance of stealing 1 random buff from the target. Damage is proportional to ATK and DEF.`,
          damage: "1.9*ATK+3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bloodlust",
          description: `Attacks 1 enemy. Damage is proportional to this Champion's MAX HP and increases according to the number of dead allies.`,
          damage: "0.3*HP*(1+Allies Dead)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unkillable [P]",
          description: `Revives this Champion with 50% HP when killed.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "881",
        "DEF": "1 090",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 33%`,
};
