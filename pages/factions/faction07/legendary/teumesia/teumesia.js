const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fiery Battleaxe",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns. <br><br>Has a 100% chance of placing a 60% [Decrease DEF] debuff for 2 turns on the target before attacking if the target is under a [HP Burn] debuff.`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cunning Chaos",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff for 3 turns.<br><br>Has a 75% chance of placing a [Stun] debuff for 1 turn on targets with 50% Turn Meter or more.<br><br>Has a 75% chance of placing a 30% [Decrease SPD] debuff for 3 turns on targets with less than 50% Turn Meter.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Burning Regret",
          description: `Attacks 1 enemy. Damage increases by 40% for each active [HP Burn] debuff in the battle (up to 400%). <br>Also has a 75% chance of decreasing the target’s Turn Meter by 15%. Decreases the target’s Turn Meter by an additional 15% for each active [HP Burn] debuff in the battle.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Inner Heat [P]",
          description: `Whenever an ally receives a [Freeze] debuff, has a 50% chance of replacing it with a [HP Burn] for 2 turns instead. This debuff cannot be blocked or removed.<br><br>Whenever any ally or enemy is under a [HP Burn] debuff, this Champion is immune to [Stun], [Sleep], [Freeze], [Fear], [True Fear], [Provoke], [Petrification] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 476",
        "DEF": "1 035",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
