const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Raw Iron Slab",
          description: `Attacks 1 enemy 2 times. Each hit will ignore [Shield] buffs.`,
          damage: "1.85*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Outrage",
          description: `Attacks all enemies. Places a 25% [Strengthen] buff on all allies for 2 turns.`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Raider Captain",
          description: `Teams up with 2 random allies to attack a single enemy. The allies joining the attack will always use their default skills. <br><br>Grants an Extra Turn if any enemy is killed.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Test This Might [P]",
          description: `Counterattacks when hit while under a [Strengthen] buff placed by this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "804",
        "DEF": "1 288",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
