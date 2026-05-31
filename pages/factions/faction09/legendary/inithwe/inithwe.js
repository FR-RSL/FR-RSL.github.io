const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vitality Censure",
          description: `Attacks 1 enemy. Destroys the target's MAX HP by 30% of the damage inflicted.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "No Mercy",
          description: `Attacks 1 enemy 3 times. Damage increases equal to the percentage of HP the target has lost.`,
          damage: "1.6*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tormenting Whispers",
          description: `Attacks all enemies. Has an 80% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "3.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Final Doom [P]",
          description: `Heals this Champion by 30% of their MAX HP each time they kill an enemy. Enemies killed by this Champion cannot be revived.<br><br>Heal Multiplier: 0.3*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 729",
        "DEF": "892",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
