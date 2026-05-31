const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Desert Ax",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Earthcleave",
          description: `Attacks all enemies. <br><br>Decreases the duration of all enemy buffs by 1 turn, and increases the duration of all ally buffs by 1 turn. <br><br>Also places a [Shield] buff on all allies for 2 turns, equal to 20% of this Champion’s MAX HP.<br><br><br>Shield Multiplier: 0.2*HP`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bestial Yell",
          description: `Places a 50% [Increase ATK] buff and a 50% [Increase ACC] buff on all allies for 2 turns.<br><br>[Barbarians Unity]<br><br>1 Faction ally:<br>Decreases the cooldown of all ally skills, except this Champion’s, by 1 turn.<br><br>2 Faction allies:<br>Fills the Turn Meters of all allies by 20%.<br><br>3 Faction allies:<br>Activates an [Instant Turn] effect on the ally with the highest C. DMG, except this Champion.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Desert Monolith [P]",
          description: `When attacked, has a 20% chance of placing a [Provoke] debuff on the attacker for 1 turn. Occurs once per hit.<br><br>[Barbarians Unity]<br><br>1 Faction ally:<br>Allies deal 25% more damage to enemies under [Stun], [Sleep], [Fear], [True Fear], [Provoke], [Freeze], and [Petrification] debuffs. If there are multiple Champions on the team with this skill, this effect will only activate once.<br><br>2 Faction allies:<br>Allies ignore 50% of target’s RES when applying [Stun], [Sleep], [Fear], [True Fear], [Provoke], [Freeze], and [Petrification] debuffs.<br><br>3 Faction allies:<br>When counterattacking, instant effects and debuffs placed by ally skills cannot be resisted or blocked.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "793",
        "DEF": "1 487",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.webp",
  description: `Increases Ally DEF in All Battles by 25%

[Barbarians only]

Increases Ally ACC in All Battles by 40`,
};
