const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Snakebiter",
          description: `Attacks 1 enemy. <br><br>Places a [True Fear] debuff on the target for 1 turn. This debuff cannot be resisted or blocked if this Champion is dead. <br><br>If this Champion is dead, also heals all allies by 20% of their MAX HP.<br><br><br>Heal Multiplier: 0.2*Target Max HP`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Battle Resurrection",
          description: `Attacks 1 enemy. Will ignore 100% of the target’s DEF. <br><br>If the target was killed, revives a random dead ally with 50% HP and 50% Turn Meter. If the target was killed and there are no dead allies, resets the cooldown of this skill instead.`,
          damage: "5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "For Valdemar!",
          description: `Attack all enemies. Destroys the MAX HP of all enemies by 10%. <br><br>Places a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is equal to the total amount of all enemies’ destroyed MAX HP.<br><br>[Undead Hordes Unity]<br><br>1 Faction ally:<br>The [Shield] buff placed by this skill cannot be removed.<br><br>2 Faction allies:<br>Instantly activates this skill whenever this Champion is revived. Doesn't work when revived by a [Revive On Death] buff.<br><br>3 Faction allies:<br>Will ignore a portion of each target’s DEF. The amount of DEF ignored is equal to the percentage of each target’s destroyed MAX HP.<br><br><br>Shield Multiplier: If Boss: 1.5% * Enemy Destroyed HP OR 100% * Enemy Destroyed HP`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Immortal Oath [P]",
          description: `Whenever this Champion is revived, increases the damage inflicted by this Champion by 20% (stacks up to 200%).<br><br>[Undead Hordes Unity]<br><br>1 Faction ally:<br>This Champion is immune to [Block Revive] debuffs.<br><br>2 Faction allies:<br>Allies receive 20% less damage if this Champion is dead.<br><br>3 Faction allies:<br>Whenever this Champion is dead and an ally attacks an enemy, this Champion will join that attack using their default skill. This attack cannot be affected by Masteries, Gear, Blessings, and other effects.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "837",
        "DEF": "1 498",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.webp",
  description: `Increases Ally DEF in All Battles by 30%

[Undead Hordes only]

Increases Ally C.RATE in All Battles by 20%`,
};
