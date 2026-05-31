const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Corpsefire",
          description: `Attacks 1 enemy 2 times. Instantly activates any [HP Burn] debuffs on the target after attacking.`,
          damage: "0.11*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exalted Pyre",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff on all enemies for 2 turns. This debuff cannot be resisted.`,
          damage: "0.23*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Death's Balance",
          description: `Equalizes the HP of all allies, then attacks 1 enemy.<br><br>The HP levels of all allies will be brought up to the level of the ally with the highest HP. <br><br>The attack will ignore 30% of the target's DEF if the target's current HP is equal to or lower than this Champion's current HP.<br><br>Will decrease the cooldown of the Exalted Pyre skill by 1 turn if the target's current HP is higher than this Champion's current HP.`,
          damage: "0.35*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fortress [P]",
          description: `Reflects 30% of the damage this Champion receives back to the attacker if this Champion has 50% HP or more.<br><br>Deals 30% more damage instead if this Champion has less than 50% HP.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 130",
        "ATQ": "870",
        "DEF": "1 167",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 30%`,
};
