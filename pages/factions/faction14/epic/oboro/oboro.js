const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spreading Chaos",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 60% [Decrease DEF] debuff for 2 turns. <br>Will attack all enemies instead if the target is under 4 or more debuffs.`,
          damage: "4.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mystic Smoke",
          description: `Attacks 1 enemy 2 times. The second hit has a 75% chance of transferring all debuffs from this Champion to the target.<br><br>The first hit has a 75% chance of stealing all buffs from the target when attacking under a [Veil] or [Perfect Veil] buff.`,
          damage: "3.15*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ninja Arts",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns, then attacks 1 enemy. Places a [Perfect Veil] buff on this Champion for 2 turns if this attack is critical.`,
          damage: "5.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vanish [P]",
          description: `Places a [Revive on Death] buff on this Champion for 3 turns whenever they receive a [Veil] or [Perfect Veil] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 454",
        "DEF": "826",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 33%`,
};
