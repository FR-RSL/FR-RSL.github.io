const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bestial Leap",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of stealing one random buff.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Terror Assault",
          description: `Attacks 1 enemy 3 times. Each hit will ignore [Shield] buffs. <br><br>Places a [True Fear] debuff on all enemies for 1 turn if this attack kills an enemy. Also places an [Unkillable] buff on this Champion for 1 turn if this attack kills an enemy.`,
          damage: "2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vitality Feast",
          description: `Swaps HP with an enemy, then grants an Extra Turn.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Prey on the Weak [P]",
          description: `Deals 30% more damage against targets whose current HP is lower than this Champion’s current HP.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 421",
        "DEF": "837",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
