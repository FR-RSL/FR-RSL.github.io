const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fury Slash",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [HP Burn] debuff on the target for 2 turns if this Champion is under an [Increase ATK] buff.<br><br>Fills this Champion's Turn Meter by 10% if this attack is critical. Fills this Champion's Turn Meter by 5% if this attack is not critical.`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crushing Hopes",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [HP Burn] debuff on the target for 2 turns if this Champion is under an [Increase ATK] buff. Decreases the target's Turn Meter by 25% and places a 50% [Increase ATK] buff on this Champion for 2 turns if this attack is critical.<br>Decreases the target's Turn Meter by 10% if this attack is not critical.`,
          damage: "5.95*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Burning Rage",
          description: `Attacks all enemies 2 times. Each hit has a 50% chance of placing a [HP Burn] debuff for 2 turns if this Champion is under an [Increase ATK] buff. Each hit also has a 75% chance of decreasing the Turn Meter by 20% if the target is under a [HP Burn] debuff.`,
          damage: "2*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brush It Off [P]",
          description: `Fully heals this Champion and instantly removes any [Stun] debuffs whenever an enemy places a [Stun] debuff on this Champion.<br><br><br>Heal Multiplier: HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 332",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
