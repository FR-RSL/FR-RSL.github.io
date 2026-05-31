const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Zephyr Lance",
          description: `Attacks 1 enemy 2 times. Each hit heals all allies by 5% of this Champion’s MAX HP. <br><br>Each hit also has a 75% chance to fill the Turn Meter of the ally with the lowest Turn Meter by 10%.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "0.13*HP",
          levelInfo: ["Level 2: Heal +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Heal +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "On Teal Wings",
          description: `Attacks all enemies. Before attacking, removes all buffs from all enemies. <br><br>Then has a 75% chance of placing a [Block Buffs] debuff and a 30% [Decrease SPD] debuff on all enemies for 2 turns. <br><br>Also fills the Turn Meters of all allies by 15%.`,
          damage: "0.21*HP",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sky Mirage",
          description: `Places a 50% [Increase RES] buff and a [Perfect Veil] buff on all allies, except this Champion, for 2 turns. <br><br>Decreases the cooldown of all ally active skills, except this Champion's, by 3 turns. The cooldown of this skill cannot be decreased or reset.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dracospeed [P]",
          description: `Turn Meter fill effects on allies under [Stun], [Freeze], [Sleep], [Provoke], [Fear], [True Fear], [Petrification], or [Sheep] debuffs are 30% more effective. <br><br>Whenever a [Sheep] debuff is removed or expires on an ally, heals that ally by 25% of their MAX HP and places a 30% [Increase SPD] buff on them for 1 turn. <br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>Heal Multiplier: 0.25*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "958",
        "DEF": "1 090",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 80`,
};
