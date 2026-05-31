const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "You're Barred!",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit has a 75% chance of removing 1 random buff from the target. <br><br>Each hit will ignore 20% of the target’s DEF.`,
          damage: "HP*0.1",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Geode Haymaker",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ACC] buff on all allies for 2 turns. <br><br>Has a 75% chance of placing a 60% [Decrease DEF] debuff and a [Block Buffs] debuff on all enemies for 2 turns.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Demolisher Blow",
          description: `Attacks 1 enemy. Before attacking, removes all debuffs from this Champion and places a 15% [Shatter] buff and a 30% [Increase C. DMG] buff on all allies for 2 turns.  <br><br>Will ignore [Unkillable], [Stone Skin] and [Block Damage] buffs. If the target is not under any [Unkillable], [Stone Skin] or [Block Damage] buffs, this attack will deal 100% more damage.<br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "0.35*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Stonefaced [P]",
          description: `At the start of this Champion's turn, removes any [Fear], [True Fear], [Provoke], [Stun], [Freeze], [Sleep], and [Petrification] debuffs from this Champion. <br><br>Increases this Champion's damage inflicted against targets with no buffs on them by 20%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "24 780",
        "ATQ": "804",
        "DEF": "1 123",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 20%`,
};
