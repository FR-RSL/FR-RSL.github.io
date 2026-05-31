const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chroma Shift",
          description: `Attacks 1 enemy.<br><br>Fills this Champion's Turn Meter by 10%. Also places a [Perfect Veil] buff on this Champion for 1 turn if this attack is critical.<br><br>If this Champion is under a [Veil] or [Perfect Veil] buff, fills this Champion's Turn Meter by 20% instead.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Jungle Ambush",
          description: `Attacks 1 enemy. Fills this Champion's Turn Meter by 50%.<br><br>Has a 75% chance of placing a [Stun] debuff on the target for 1 turn when attacking while under a [Veil] or [Perfect Veil] buff.<br><br>Has a 75% chance of placing a [Sleep] debuff on the target for 1 turn when attacking without a [Veil] or [Perfect Veil] buff.<br><br>Places a [Perfect Veil] buff on this Champion for 2 turns after attacking without a [Veil] or [Perfect Veil] buff.<br><br>Will ignore [Shield], [Strengthen], and [Unkillable] buffs.`,
          damage: "6.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flicker Step",
          description: `(While under a [Veil] or [Perfect Veil] buff)<br><br>Attacks all enemies. Before attacking, has a 75% chance of placing a 60% [Decrease DEF] debuff and a 25% [Weaken] debuff. Decreases the cooldown of the Jungle Ambush skill by 2 turns. Will ignore [Block Debuffs], [Shield], and [Strengthen] buffs.<br><br>(While not under a [Veil] or [Perfect Veil] buff)<br><br>Attacks 1 enemy. Has a 75% chance of placing a 60% [Decrease DEF] debuff and a 25% [Weaken] debuff on the target for 2 turns before attacking. Places a [Perfect Veil] buff on this Champion for 2 turns after attacking.`,
          damage: "6.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chameleon [P]",
          description: `Places a [Block Debuffs] and a 50% [Increase ATK] buff on this Champion for 1 turn, and a 15% [Continuous Heal] buff for 2 turns whenever they receive a [Veil] or [Perfect Veil] buff.<br><br>Places a protected [Perfect Veil] buff on this Champion for 1 turn whenever an enemy receives a buff from skills.<br><br>If the target's MAX HP is higher than this Champion's, will ignore 15% of the target's DEF. If the target's MAX HP is more than double this Champion's, will ignore 30% of the target's DEF instead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 553",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in all battles by 23%`,
};
