const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Heckler of Legends",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Provoke] debuff for 1 turn. The chance increases to 55% against Legendary Champions.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rats Off To Ya",
          description: `Attacks all enemies. Has an 80% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Also has an 80% chance of placing a [Fear] debuff for 1 turn on each Legendary Champion.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Get Comfy Everyone",
          description: `Places a [Shield] buff and a 15% [Continuous Heal] buff on all allies for 2 turns.<br><br>The value of the [Shield] buff is proportional to this Champion’s DEF.<br><br><br>Shield Multiplier: 2.5*DEF`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Too Awesome To Die [P]",
          description: `Whenever an ally is attacked, has a 100% chance of completely blocking 1 hit, decreasing the incoming damage to zero. This Champion will receive that damage instead. It will also redirect any debuffs from the hit to this Champion. The chance of blocking a hit and redirecting the debuffs decreases to 50% if the attacker is a Boss. Does not work if the attack on the ally was an AoE attack.<br><br>Whenever an enemy is healed, heals this Champion by 20% of that heal.<br><br>Heal Multiplier: 0.2*CurrentHealMultiplier`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Didn't Need 'Em [P]",
          description: `Increases this Champion’s HP, DEF, and SPD by 10% for each dead ally.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "782",
        "DEF": "1 421",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 30%`,
};
