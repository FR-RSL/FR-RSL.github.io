const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Arcane Dynamo",
          description: `Attacks 1 enemy. Fills this Champion's Turn Meter by 10%. Fills the Turn Meter by 20% if this attack is critical.`,
          damage: "4.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Timeslip",
          description: `Attacks 1 enemy. Also attacks all other enemies if the first attack is critical. The second hit has a 50% chance of placing a [Stun] debuff for 1 turn. After attacking, decreases the Turn Meters of each enemy without a [Stun] debuff by 20%.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +15%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Psychic Guidance",
          description: `Places a 30% [Increase SPD] buff, a 30% [Increase C. RATE] buff, and a 30% [Increase C. DMG] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chrono Isolation [P]",
          description: `Immune to Turn Meter reduction effects from enemies.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "925",
        "DEF": "1 123",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 17%`,
};
