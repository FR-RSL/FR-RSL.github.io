const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sizzling Strike",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brand of Shame",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [HP Burn] debuff and two 5% [Poison] debuffs for 2 turns.`,
          damage: "7.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Beatdown",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on all allies except this Champion for 3 turns. Then, all allies except this Champion will attack 1 target enemy.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Body Block [P]",
          description: `Deflects 20% of all incoming damage this Champion receives onto all allies. The damage will be spread equally across all allies.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 244",
        "DEF": "1 090",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
