const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ringing Blow",
          description: `Attacks 1 enemy. Has a 15% chance of placing a [Stun] debuff for 1 turn. Has a 40% chance of placing a [Stun] debuff for 1 turn instead if the target has more than 75% Turn Meter.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Show of Valor",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns, then attacks 1 enemy. <br><br>Will ignore 25% of the target’s DEF. Will ignore 50% of the target’s DEF instead if the target is under an [Increase DEF] buff.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Exemplar [P]",
          description: `Immune to [Fear], [True Fear], [Freeze], [Provoke], [Sleep], [Stun], [Petrification] debuffs.`,
          cooldown: 5,
          levelInfo: ["Level 1: Cooldown -1", "Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 387",
        "DEF": "1 079",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Doom Tower by 50`,
};
