const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Strangling Plants",
          description: `Attacks all enemies. Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "2.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Riotous Revival",
          description: `Removes all debuffs from a target ally, then heals them by 40% of their MAX HP. If the target of this skill is not this Champion, decreases the cooldown of all of the target’s skills by 2 turns.<br><br><br>Heal Multiplier: 0.4*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bark Flesh",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Also places a 15% [Strengthen] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Broad Roots [P]",
          description: `Whenever this Champion is healed, heals each ally except this Champion by 20% of that heal.<br><br>Heal Multiplier: 0.2*DEALT_HEAL+(0.2*Remaining Heal Amount)`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "683",
        "DEF": "1 277",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
