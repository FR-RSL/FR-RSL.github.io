const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Night's Finger",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Sleep] debuff for 1 turn. <br><br>If Crohnam is on the same team, and the [Sleep] debuff was resisted or blocked, places a 30% [Decrease SPD] debuff instead for 2 turns. This debuff cannot be blocked.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Radiant Moon",
          description: `Heals a target ally by 30% of their MAX HP and fills their Turn Meter by 30%. <br><br>If this skill is used on Crohnam, Crohnam will instantly activate their Berserker's Delight skill.<br><br><br>Heal Multiplier: 0.3*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Moonlit March",
          description: `Revives all dead allies with 30% HP and 30% Turn Meter.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Phasing [P]",
          description: `Whenever an ally uses an Active Skill, has a 20% chance of decreasing the cooldown of that skill by 1 turn.`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "936",
        "DEF": "1 079",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 20%`,
};
