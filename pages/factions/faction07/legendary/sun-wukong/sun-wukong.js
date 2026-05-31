const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gotcha!",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Stun] debuff for 1 turn. The chance increases to 50% if the target has any buffs.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Staff of Wonder",
          description: `Attacks 1 enemy. Will ignore 50% of the target’s DEF. <br><br>Will attack all remaining enemies with any surplus damage if the target is killed. This attack will also ignore 50% of the target’s DEF. This attack cannot be critical. <br><br>If the initial target survives, places a [Sheep] debuff on them for 1 turn. This debuff cannot be blocked.`,
          damage: "5*ATKMultiplier: Remaining Damage Amount",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Now You See Us",
          description: `Attacks all enemies. Before attacking, steals all buffs from all enemies and then places a [Block Buffs] debuff on them for 2 turns.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unbeatable Wukong [P]",
          description: `Revives this Champion with 100% HP and 100% Turn Meter 3 turns after they were killed.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 586",
        "DEF": "892",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 28%`,
};
