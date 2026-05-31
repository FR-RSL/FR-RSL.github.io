const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Witchlight Barrier",
          description: `Attacks 1 enemy. Places a [Shield] buff equal to 10% of this Champion’s MAX HP on the ally with the lowest HP for 2 turns.<br><br><br>Shield Multiplier: 0.1*HP`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Shield +5%", "Level 6: Shield +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blinding Glow",
          description: `Attacks 1 enemy. Places a [Stun] debuff for 1 turn. Has an 80% chance of teaming up with 3 random allies to attack a random enemy. Allies joining the attack will use their default skills.`,
          damage: "5.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "War Weirding",
          description: `Places a 50% [Increase ATK] buff and a 30% [Increase C. RATE] buff on all allies for 3 turns, then attacks all enemies.`,
          damage: "4.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 244",
        "DEF": "1 222",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
