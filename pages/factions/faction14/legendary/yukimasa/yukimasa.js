const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Winnowing Winter",
          description: `Attacks all enemies.<br><br>Has a 25% chance of placing a [Block Active Skills] debuff for 1 turn. This debuff cannot be resisted if there is at least 1 enemy under a [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], or [Petrification] debuff.<br><br>Instantly activates this skill whenever this Champion skips a turn because of a [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], or [Petrification] debuff.`,
          damage: "2.7*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff chance +5%", "Level 5: Buff/Debuff chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blizzard of Stikes",
          description: `Attacks all enemies. Will ignore [Block Damage] buffs.<br><br>Has a 75% chance of placing a [Freeze] debuff on all enemies for 1 turn. This debuff cannot be resisted, if there is at least 1 enemy under a [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], or [Petrification] debuff.<br><br>Revives one random ally with 50% HP and 50% Turn Meter, if this skill did not kill an enemy. Revives all allies with 50% HP and 50% Turn Meter, if this skill kills at least one enemy.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff chance +10%", "Level 5: Buff/Debuff chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Stain the Snows",
          description: `Attacks 1 enemy. Before attacking, steals all Turn Meter from the target. This effect cannot be resisted if there is at least 1 enemy under a [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], or [Petrification] debuff.<br><br>Also equalizes the target's DEF with this Champion’s DEF for this attack.<br><br>The damage inflicted by this skill increases by the amount of Turn Meter stolen.`,
          damage: "5.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Solitary Demon [P]",
          description: `Fills this Champion's Turn Meter by 50% whenever this Champion skips a turn because of a [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], or [Petrification] debuff.<br><br>Whenever this Champion skips a turn because of one of those debuffs, their next active skill will ignore 50% of the target's DEF.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 608",
        "DEF": "914",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena battles by 33%.`,
};
