const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bloodsucker",
          description: `Attacks 1 enemy. Heals this Champion by 30% of the damage inflicted. <br><br>Will then attack enemies under [Leech] debuffs.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tornado",
          description: `Places a 30% [Increase SPD] and a 30% [Increase C. DMG] buff on all allies for 2 turns. <br><br>Places a [True Fear] and a [Leech] debuff on all enemies for 2 turns.<br><br>Grants an Extra Turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Open Wounds",
          description: `Attacks 1 enemy. Has an 80% chance of stealing all buffs from the target before attacking. <br><br>Places a 100% [Heal Reduction] debuff for 2 turns. <br><br>Also places two 15% [Continuous Heal] buffs on this Champion for 3 turns. <br><br>Damage increases by 50% against targets that have no buffs.`,
          damage: "6.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 454",
        "DEF": "936",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 34%`,
};
