const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frost Piercer",
          description: `Attacks 3 times at random. Each hit has a 30% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "1.1*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dancing Razor",
          description: `Attacks 1 enemy 4 times. The first and the second hit have a 50% chance to place a 50% [Decrease ATK] debuff for 2 turns. The third and the fourth hit have a 50% chance to place a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "1.35*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chromatic Cross",
          description: `Attacks all enemies 2 times. Each hit has a 50% chance of placing a 30% [Decrease SPD] debuff for 2 turns. Heals this Champion by 30% of the damage dealt.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "1.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Coldblooded Drive [P]",
          description: `Whenever an ally places a [Freeze] debuff, this Champion has a 30% chance to attack the target with their default skill.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 343",
        "DEF": "980",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
