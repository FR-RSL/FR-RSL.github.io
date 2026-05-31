const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Service in Death",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit steals 10% of the target's Turn Meter. Places a [True Fear] debuff for 2 turns if the target’s Turn Meter is fully depleted.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Unwelcome Guest",
          description: `Attacks 1 enemy. <br><br>Places a [Petrification] debuff for 1 turn. Has a 75% chance of placing a [True Fear] debuff for 2 turns on all other enemies who are not under a [Fear] or [True Fear] debuff.<br><br>[Passive Effect]<br><br>Activates this skill whenever an enemy under a [Fear] or [True Fear] debuff successfully uses a skill. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Spectral Flourish",
          description: `Attacks all enemies. Before attacking, has a 75% chance of decreasing the duration of all enemy buffs by 3 turns. Will grant an Extra Turn if there are no buffs on the enemy team before the attack.<br><br>Also has a 75% chance of increasing the cooldowns of all enemy skills by 3 turns.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ghost With The Most [P]",
          description: `Whenever an enemy is revived, places a [True Fear] debuff on that enemy for 2 turns. If there are multiple Champions on the team with this skill, this effect will only activate once. <br><br>Removes any [Stun], [Freeze], [Sleep], [Provoke], [Fear], [True Fear], and [Petrification] debuffs from this Champion before the start of their turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "1 211",
        "DEF": "1 101",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
