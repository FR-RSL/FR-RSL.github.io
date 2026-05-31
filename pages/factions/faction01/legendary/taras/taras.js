const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shatter Upon Us",
          description: `Attacks 1 enemy 2 times. Has a 40% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Each critical hit fills the Turn Meters of all allies by 5%.`,
          damage: "0.12*B_HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hero's Intercession",
          description: `Attacks 1 enemy. Places a [Stun] debuff for 2 turns. Deals double damage to enemies whose ATK is equal to or higher than this Champion’s ATK. <br><br>[Passive Effect]<br><br>Whenever an enemy attacks Marichka the Unbreakable, attack that enemy using this skill.`,
          damage: "0.35*B_HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Constant Pressure",
          description: `Attacks all enemies. Damage increases by 15% for each buff on allies. Then increases the duration of all ally buffs by 1 turn. <br><br>Heals this Champion by 5% for every buff that had its duration increased. Restores decreased MAX HP equal to the amount of any surplus heal.<br><br><br>Heal Multiplier: 0.05*B_HP*Total Duration Increased`,
          damage: "0.26*B_HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fierce Battler [P]",
          description: `[Passive Effect] <br><br>When attacked, decreases the enemy's ATK by 10% (up to 50%; 25% against Bosses). Occurs once per skill. ATK reduction resets after each Round. <br><br>[Active Effect] <br><br>Places a [Fear] debuff on all enemies from the Orcs, Ogryn Tribes, Undead Hordes, and Demonspawn Factions at the beginning of each Round for 1 turn. This debuff cannot be resisted.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Poise [P]",
          description: `All incoming damage from skills is reduced by 50%. <br><br>When attacked, this Champion's MAX HP will be decreased by 25% of the attack's initial damage (before the damage reduction).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "705",
        "DEF": "1 387",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in all Battles by 24%`,
};
