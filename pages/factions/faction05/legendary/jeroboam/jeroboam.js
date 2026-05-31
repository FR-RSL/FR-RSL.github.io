const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stout Smash",
          description: `Attacks 1 enemy 2 times. <br><br>Has a 35% chance of decreasing the cooldown of a random ally’s skill by 1 turn. <br><br>If an ally had their cooldown decreased, also fills that ally’s Turn Meter by 10%.`,
          damage: "1.6*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "This Round's On Me!",
          description: `Removes all debuffs from all allies. <br><br>Heals all allies by 15% of this Champion’s MAX HP. Also heals each ally by an extra 2% for each debuff removed from them by this skill. <br><br>Places a [Shield] buff on all allies, equal to 15% of this Champion's MAX HP, for 2 turns.<br><br><br>Heal Multiplier: (0.15*HP)+(0.02*HP*unappliedStatusEffectsCount)Shield Multiplier: 0.15*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Last Orders",
          description: `Has a 75% chance of increasing the duration of all enemy debuffs by 1 turn. Also has a 75% chance of increasing the duration of all ally buffs by 1 turn. <br><br>Fills the Turn Meters of all allies by 20%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Absolute Legend [P]",
          description: `[Passive Effect]<br><br>Turn Meter reduction effects used against this Champion by enemies are decreased by 50%. <br><br>Also fills this Champion's Turn Meter by 20% whenever a [Stun], [Freeze], [Sleep], [Provoke], [Fear], [True Fear], [Petrification], or [Sheep] debuff is placed on an ally. If there are multiple Champions on the team with this skill, this effect will only activate once. <br><br>[Active Effect]<br><br>Whenever a [Stun], [Freeze], [Sleep], [Provoke], [Fear], [True Fear], [Petrification], or [Sheep] debuff is removed or expires on an ally, fills their Turn Meter by 20%. If there are multiple Champions on the team with this skill, this effect will only activate once.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "870",
        "DEF": "1 498",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
