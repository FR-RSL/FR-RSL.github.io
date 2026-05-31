const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Roaring Leap",
          description: `Attacks 1 enemy. Has a 40% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "4.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Raging Bull",
          description: `Attacks 2 times at random. Each hit has a 50% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "3.1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Adrenaline Rush [P]",
          description: `Heals this Champion by 15% of their MAX HP and places a [Counterattack] buff on this Champion for 2 turns when hit with a critical hit.<br><br><br>Heal Multiplier: 0.15*HP`,
          cooldown: 2,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Vigilant Partner [P]",
          description: `Immune to [Stun], [Freeze], and [Sleep] debuffs.<br><br>[Only available when Kallia is on the same team.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "826",
        "DEF": "1 145",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
