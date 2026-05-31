const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blessed Missiles",
          description: `Attacks 1 enemy. <br><br>Has a 40% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Whiplash",
          description: `Attacks 1 enemy. <br><br>Has a 75% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "5.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Buff/Debuff Chance +15%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fiend Purge",
          description: `Attacks 1 enemy with 2 random allies.<br><br>Damage inflicted by this Champion and any allies joining this attack will be increased by 20% if the target is under a [Fear], [True Fear], [Freeze], [Provoke], [Sleep], [Stun], or [Petrification] debuff. Allies joining the attack use their default skills.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 387",
        "DEF": "1 035",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
