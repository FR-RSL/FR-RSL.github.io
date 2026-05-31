const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stupefy",
          description: `Attacks 1 enemy. Has a 60% chance of placing a [Sleep] debuff for 1 turn. Has a 50% chance of granting an Extra Turn if the [Sleep] debuff is placed.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Slobber Knocker",
          description: `Attacks 1 enemy. Places a [Stun] debuff for 1 turn. Places a [Stun] debuff for 2 turns if the target is under a [Sleep] debuff.`,
          damage: "6.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "And Stay Down",
          description: `Attacks 1 enemy. Enemies killed by this skill cannot be revived.`,
          damage: "7.15*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 354",
        "DEF": "936",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
