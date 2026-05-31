const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rampant Blows",
          description: `Attacks 1 enemy 2 times.<br><br>If this Champion is under a [Veil] or [Perfect Veil] buff, each hit has a 50% chance to decrease the target's Turn Meter by 15%.<br><br>Places a 50% [Increase ATK] buff on this Champion for 2 turns if this attack is critical.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Overthrow",
          description: `Attacks 1 enemy 3 times.<br><br>If the target is under a [Hex] debuff, each hit will ignore 25% of the target's DEF. Will ignore a further 25% of the target's DEF if they are also under a [Decrease SPD] debuff.<br><br>Will also ignore an additional 25% of the target's DEF if they are from the Banner Lords or Knights Revenant Factions.`,
          damage: "1.95*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Witchfinder",
          description: `Attacks 4 times at random. <br><br>Each hit has a 75% chance of placing a [Hex] debuff for 3 turns and a 30% [Decrease SPD] debuff for 2 turns. Champions from the Banner Lords and Knights Revenant Factions cannot resist these debuffs. <br><br>Each hit also has a 75% chance to steal 25% of the target’s Turn Meter. If the target is from the Banner Lords or Knights Revenant Factions, steals 50% of the Turn Meter instead.<br><br>Also places a [Perfect Veil] buff on this Champion for 2 turns.`,
          damage: "1.75*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hunter's Guile [P]",
          description: `If this Champion attacks a target under a [Hex] debuff and a [Decrease SPD] debuff, places a [Perfect Veil] buff on this Champion for 1 turn. This effect will not activate when counterattacking.<br><br>Also increases this Champion's C. DMG by 30% while attacking under a [Perfect Veil] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 509",
        "DEF": "1 057",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
