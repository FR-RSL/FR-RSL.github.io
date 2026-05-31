const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Decrepit Hatchet",
          description: `Attacks 1 enemy. Has a 15% chance of placing a [Sleep] debuff for 1 turn.`,
          damage: "5.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Payback [P]",
          description: `Has a 30% chance of counterattacking when hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "551",
        "DEF": "749",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
