const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Soulburst Arrow",
          description: `Attacks 1 enemy. <br><br>Heals this Champion by 10% of their MAX HP. Heals this Champion by 20% of their MAX HP instead, when attacking a target under a [HP Burn] debuff.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "3.25*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Damage +10%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Moonshot",
          description: `Attacks all enemies. Has a 50% chance of increasing the duration of any [HP Burn] debuffs by 1 turn.`,
          damage: "3.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lunar Ballista",
          description: `Attacks 3 times at random. Before attacking, places a 25% [Increase ACC] buff on this Champion for 2 turns. <br><br>Each hit has a 50% chance of placing a [HP Burn] debuff for 2 turns.`,
          damage: "1.7*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Solar Boost [P]",
          description: `Boosts this Champion’s Turn Meter by 5% each time a [HP Burn] debuff is activated.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 266",
        "DEF": "870",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
