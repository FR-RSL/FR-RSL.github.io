const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ravenblade",
          description: `Attacks 1 enemy. Has a 40% chance of placing a [Block Active Skills] debuff for 2 turns. This effect cannot be resisted if this Champion is under a [Shield] buff. <br><br>Whenever an ally counterattacks, teams up with allies to attack, or instantly activates a skill, also has a 40% chance to place a [Block Active Skills] debuff for 2 turns on the target enemy. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Student of War",
          description: `Attacks 1 enemy. This attack is always critical if this Champion is under a [Shield] buff. This attack also gains a damage boost equal to the percentage difference between this Champion's MAX HP and the value of any [Shield] buffs on them. <br><br>Removes all debuffs from all allies if the target is killed. If the target survives, places a [Provoke] debuff on all enemies for 1 turn instead. This effect cannot be resisted if this Champion is under a [Shield] buff.`,
          damage: "5.5*DEF*(1+SHIELDS_SUM_VALUE/HP)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Androc's Confidant",
          description: `Places a 50% [Ally Protection] buff, a 50% [Increase ATK] buff, and a 30% [Increase SPD] buff on a single ally for 2 turns. Also fills that ally’s Turn Meter by 40%. <br><br>Instantly activates this skill at the end of an ally’s turn if that ally has no buffs and their HP is lower than 100%. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "For Lord & Land [P]",
          description: `Each time an enemy hits an ally, that ally’s next attack will deal 10% more damage for each hit they take (stacks up to 100%). The damage increase resets after that ally deals damage.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "837",
        "DEF": "1 509",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Void Ally HP in all Battles by 40%`,
};
