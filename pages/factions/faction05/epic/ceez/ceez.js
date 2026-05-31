const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Snicker and Slice",
          description: `Attacks 1 enemy. Places a 50% [Increase ATK] buff on this Champion for 2 turns if this attack is critical.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Night of the Bat",
          description: `Attacks 1 enemy 3 times. Fills this Champion’s Turn Meter by 10% on each critical hit. Also places a [Perfect Veil] buff on this Champion for 1 turn.`,
          damage: "1.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Swarming Suffering",
          description: `Attacks all enemies. Places a 30% [Increase C. DMG] buff on this Champion for 2 turns before attacking. Heals this Champion by 5% of their MAX HP on each critical hit.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "3.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gimme! [P]",
          description: `Steals 15% of the Turn Meter from the enemy with the highest Turn Meter at the end of this Champion’s turn. This effect cannot be resisted.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 531",
        "DEF": "837",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
