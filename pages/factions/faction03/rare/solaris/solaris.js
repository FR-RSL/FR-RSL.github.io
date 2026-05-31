const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cleansing Light",
          description: `Attacks 1 enemy. Has a 30% chance of removing one random buff from the target.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Solar Shield",
          description: `Attacks 1 enemy. Places a [Shield] buff on this Champion equal to 20% of the damage inflicted for 2 turns.<br><br><br>Shield Multiplier: 0.2*Damage Dealt`,
          damage: "5.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blinding Bash",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "6.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 244",
        "DEF": "881",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
