const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crush",
          description: `Attacks 1 enemy. Has a 15% chance of placing an extra hit.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Remedy",
          description: `Removes all debuffs from a target ally. Heals the target by 20%. The heal increases according to the amount of debuffs removed.<br><br><br>Heal Multiplier: Target Max HP*0.2+0.1*Target Max HP*DEBUFF_COUNT`,
          cooldown: 3,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +5%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Forest Kin [P]",
          description: `Heals the ally with the lowest HP by 7.5% each turn. This heal can be critical. Will not heal this Champion.<br><br>Heal Multiplier: 0.075*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 024",
        "DEF": "1 013",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
