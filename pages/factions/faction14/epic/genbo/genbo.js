const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Twin Soulswords",
          description: `Attacks 1 enemy 2 times. Each hit steals any [Increase ATK] buffs. Each hit also has a 30% chance of stealing 1 random buff.<br><br>The [Increase ATK] buff steal cannot be resisted.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Heartless Blitz",
          description: `Attacks all enemies. Has an 80% chance of decreasing the duration of all buffs by 1 turn. This effect cannot be resisted on critical hits.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sword Trance",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 3 turns, then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Flinty [P]",
          description: `Immune to [Decrease ATK] debuffs. Will ignore [Unkillable] buffs when attacking under an [Increase ATK] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 409",
        "DEF": "958",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 20%`,
};
