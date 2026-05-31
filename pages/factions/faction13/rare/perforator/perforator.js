const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vermin Slayer",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 5% [Poison] debuff for 1 turn.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hardened Tips",
          description: `Attacks 1 enemy. Will ignore 50% of the target's DEF. Grants an Extra Turn if this attack kills an enemy.`,
          damage: "4.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Scare Off [P]",
          description: `Has a 35% chance of placing a [Fear] debuff on the target for 1 turn when this Champion inflicts a critical hit.`,
          cooldown: 2,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 277",
        "DEF": "804",
        "VIT": "86",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
