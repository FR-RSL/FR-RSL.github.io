const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bullseye",
          description: `Attacks 1 enemy. Grants an Extra Turn if the target is killed.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exhortation",
          description: `Removes 1 random debuff from all allies. Has a 60% chance of placing a 30% [Increase SPD] on all allies for 2 turns.`,
          cooldown: 3,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Avenger [P]",
          description: `Counterattacks the attacker when an ally is attacked.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 167",
        "DEF": "1 035",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 16%`,
};
