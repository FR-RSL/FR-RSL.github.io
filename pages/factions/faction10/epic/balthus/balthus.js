const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shield Strike",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "4.15*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Doomwheels",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease C. RATE] debuff for 2 turns.`,
          damage: "4.2*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Driven to Slaughter",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Provoke] debuff for 2 turns. <br><br>Also heals this Champion by 20% of their MAX HP.<br><br><br>Heal Multiplier: 0.2*HP`,
          damage: "6.4*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Enchanted Shields [P]",
          description: `Reflects 30% of the damage this Champion receives back to the attacker.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "848",
        "DEF": "1 255",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 30%`,
};
