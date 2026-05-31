const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Meatsplitter",
          description: `Attacks 1 enemy. Attacks all enemies 1 time if the first attack is critical.`,
          damage: "0.18*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gnashing Bog",
          description: `Attacks all enemies. Places a [Shield] buff on this Champion for 2 turns, equal to 20% of the damage inflicted. <br><br>Also heals this Champion by 10% of their MAX HP for each critical hit.<br><br><br>Shield Multiplier: 0.2*Damage DealtHeal Multiplier: 0.1*HP`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Apex Predator",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on all allies for 3 turns, then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Voracious Hunger [P]",
          description: `Whenever this Champion attacks, decreases the target’s ATK or DEF by 5%, as well as ACC or RES by 5%, depending on which stat is the highest (stacks up to 30%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "991",
        "DEF": "1 112",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
