const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Three Visitations",
          description: `Attacks 1 enemy 3 times. Each hit has a 20% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bedevil",
          description: `Attacks 1 enemy. Places a [Stun] debuff for 2 turns. Grants an Extra turn and resets the cooldown of this skill if Yumeko is on the same team and this skill kills an enemy.`,
          damage: "6.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Suppression Ward",
          description: `Attacks all enemies. Has an 80% chance of placing a [Block Active Skills] debuff for 2 turns. This debuff cannot be resisted if Yumeko is on the same team.`,
          damage: "4.65*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Stoicism [P]",
          description: `Damage inflicted by this Champion cannot be decreased by enemy Passive skills or Masteries, except by the Passive skills of Bosses. <br><br>Damage inflicted by this Champion cannot be increased by either this Champion's Masteries or ally Passive skills, except when attacking Bosses.<br><br>Whenever Yumeko dies, instantly grants a turn to this Champion and resets the cooldowns of each of this Champion’s skills.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 564",
        "DEF": "859",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 20%`,
};
