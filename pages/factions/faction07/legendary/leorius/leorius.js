const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lion's Twinclaws",
          description: `Attacks 1 enemy 2 times. Each hit has a 60% chance of placing a 60% [Decrease DEF] debuff for 2 turns.<br><br>Damage increases by 20% if the target has less than 60% HP.`,
          damage: "1.65*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rage of the Pride",
          description: `Attacks all enemies 2 times.<br><br>[Passive Effect]<br><br>This Champion is immune to [Stun], [Freeze], [Sleep], [Provoke], [Fear], [True Fear], [Petrification] debuffs when this Skill is not on cooldown.`,
          damage: "2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Awesome Roar",
          description: `Attacks all enemies. Has an 80% chance of placing a [True Fear] debuff for 1 turn. <br><br>Before attacking, has an 80% chance of placing a 25% [Weaken] debuff on all enemies for 2 turns.`,
          damage: "3.85*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "True Grit [P]",
          description: `[Active Effect]<br><br>Instantly places an [Unkillable] buff on this Champion for 1 turn before receiving a fatal hit.<br><br>[Passive Effect]<br><br>Damage increases as the Champion's HP decreases (by 1% for every 1% of HP lost).`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 409",
        "DEF": "936",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 24%`,
};
