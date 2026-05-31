const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Firefly Hatchet",
          description: `Attacks 1 enemy 2 times. Each hit has a 25% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.85*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +15%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Moonlight Ambuscade",
          description: `Teams up with 2 random allies to attack a single enemy. The allies joining the attack will use their default skills. <br><br>If the target is under a [Decrease DEF] debuff, these attacks will ignore 20% of the target’s DEF.`,
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Covert Blitz",
          description: `Attacks all enemies. Before attacking, places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns. <br><br>If this attack kills an enemy, places a [Veil] buff on all allies for 1 turn.`,
          damage: "3.75*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gloompiercer [P]",
          description: `This Champion will ignore [Shield] and [Strengthen] buffs when attacking under an [Increase ATK], [Veil], or [Perfect Veil] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 421",
        "DEF": "848",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 20%`,
};
