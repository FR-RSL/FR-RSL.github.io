const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Castigate",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "0.24*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Holy Equity",
          description: `Heals the ally with the lowest HP by 20% of this Champion’s MAX HP, then equalizes the HP levels of all allies and grants this Champion an Extra Turn.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rebuff [P]",
          description: `Receives 15% less damage from enemies under [Provoke] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "859",
        "DEF": "903",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
