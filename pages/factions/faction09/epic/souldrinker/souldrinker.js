const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Razing Hand",
          description: `Attacks 1 enemy. Decreases [Bomb] debuff detonation countdowns by 1 turn.`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Raining Fire",
          description: `Attacks 3 times at random. Decreases [Bomb] debuff detonation countdowns by 1 turn.`,
          damage: "2.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Magma Blast",
          description: `Attacks all enemies 2 times. Each hit has a 75% chance of placing a [Bomb] that detonates after 3 turns.<br><br><br>Bomb Multiplier: 4.5*ATK`,
          damage: "2.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Set Ablaze [P]",
          description: `Places two [Bomb] debuffs on each enemy that detonate after 2 turns when this Champion dies.<br><br>Bomb Multiplier: 2.5*ATK`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 299",
        "DEF": "848",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
