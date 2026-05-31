const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gaze of Justice",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Enforced Humility",
          description: `Attacks all enemies 1 time. Has a 75% chance of decreasing the duration of all enemy buffs by 1 turn.`,
          damage: "2.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mentor of Heroes",
          description: `Places a 50% [Increase ATK] buff on all allies for 2 turns, then fills the Turn Meters of all allies by 30%. Heals all allies by 25% of their MAX HP if they have less than 50% HP.<br><br><br>Heal Multiplier: 0.25*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Destiny's Call",
          description: `Revives all dead allies to 30% HP, then fills the Turn Meters of all allies by 20%. Grants an Extra Turn to this Champion if an ally was successfully revived.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 135",
        "ATQ": "1 068",
        "DEF": "1 101",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 30%`,
};
