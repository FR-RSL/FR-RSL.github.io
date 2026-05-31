const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Links Of Death",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff and a 25% [Weaken] debuff for 1 turn.`,
          damage: "2.3*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wretched Guillotine",
          description: `Attacks all enemies. Has a 75% chance of placing a [Provoke] debuff for 1 turn. <br><br>Places a 60% [Increase DEF] buff and a [Shield] buff on all allies for 2 turns. The value of the [Shield] is proportional to this Champion's DEF.<br><br><br>Shield Multiplier: 3*DEF`,
          damage: "4.1*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "You Stand Accused",
          description: `Attacks 1 enemy. Will ignore [Life Barrier], [Poison Cloud], [Shield], and [Block Damage] buffs, as well as 25% of the target's DEF. <br><br>If the target was killed by this skill, revives a random dead ally with 50% HP and 50% Turn Meter. This revive will ignore [Block Revive] debuffs. <br><br>Places a [Block Revive] debuff on targets killed by this skill.`,
          damage: "5.2*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fallen Legend [P]",
          description: `Whenever this Champion kills an enemy or decapitates a Hydra Head, fills the Turn Meters of all allies by 25% and heals them by 25% of their MAX HP.<br><br>Heal Multiplier: 0.25*Target Max HP`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Master Wills It [P]",
          description: `Whenever an enemy is revived, instantly activates the You Stand Accused skill against that enemy. If multiple enemies are revived, the initial target of the revive will be targeted by the You Stand Accused skill. Will not put the You Stand Accused skill on cooldown. <br><br>Has a 50% chance of activating the You Stand Accused skill on an enemy whenever an ally is killed. Occurs once per turn. <br><br>Instantly activates the You Stand Accused skill against a Hydra Head whenever an ally is consumed by that Head. Will not put the You Stand Accused skill on cooldown.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "749",
        "DEF": "1 597",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 33%`,
};
