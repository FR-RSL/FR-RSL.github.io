const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nightmare Juggernaut",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 15% [Continuous Heal] buff on this Champion for 1 turn if this attack is critical.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chemical Stench",
          description: `Attacks all enemies. Has a 30% chance of placing a [Provoke] debuff for 2 turns.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Canister [P]",
          description: `Whenever this Champion is attacked, heals all allies except this Champion by 20% of the damage received.<br><br>Heal Multiplier: 0.2*Damage Dealt`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "716",
        "DEF": "1 134",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
