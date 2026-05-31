const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Necrobolt",
          description: `Attacks 1 enemy. <br><br>Has a 30% chance of decreasing the cooldown of a random ally’s skill by 2 turns (except this Champion). <br><br>If Wight King Narses is on the same team and has any active skills on cooldown, decreases the cooldown of one of their skills by 2 turns. <br><br>If Wight King Narses is on the same team and has no active skills on cooldown, decreases the cooldown of a random ally’s skill by 2 turns (except this Champion). <br><br>If the cooldown on a skill is fully reset, also heals that ally by 10% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "5.6*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shield of Emaria",
          description: `Removes all debuffs from all allies, and places a [Shield] buff on them equal to 25% of this Champion's MAX HP for 2 turns. <br><br>If Wight King Narses is on the same team, also places a 25% [Strengthen] buff on all allies for 2 turns. <br><br>Then, fills the Turn Meters of all allies by 10%.<br><br><br>Shield Multiplier: 0.25*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +10%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rise, My Love",
          description: `Revives a dead ally with 50% HP and 75% Turn Meter. Resets the cooldowns of the revived ally’s skills. <br><br>If the target is Wight King Narses, revives them with 75% HP and 100% Turn Meter instead. <br><br>After the revival, decreases the Turn Meters of all enemies by 10%. <br><br>If Wight King Narses is revived, decreases the Turn Meters of all enemies by 20% instead. This effect cannot be resisted.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Queen Consort [P]",
          description: `Whenever an enemy tries to place a [Fear], [True Fear], [Freeze], [Provoke], [Sleep], [Stun], or [Petrification] debuff on the ally with the highest C. DMG., transfer those debuffs to this Champion instead.<br><br>Fills the Turn Meter of this Champion by 50% if this Champion misses their turn due to one of these debuffs.<br><br>At the start of this Champion's turn, remove any [Fear], [True Fear], [Freeze], [Provoke], [Sleep], [Stun], or [Petrification] debuffs from this Champion, if Wight King Narses is on the same team. <br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "980",
        "DEF": "1 211",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
