const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Maul",
          description: `Attacks 1 enemy. Has a 55% chance of decreasing the duration of all buffs on the target by 1 turn.<br><br>Also has an 80% chance of placing a [Block Active Skills] debuff for 1 turn.`,
          damage: "4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ice Pillar",
          description: `Attacks all enemies. Places a [Block Buffs] debuff and a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Thick Skin [P]",
          description: `Immune to [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], [Sheep], and [Petrification] debuffs. <br><br>Decreases the damage taken by all allies that are under 1 or more buffs by 15%. Decreases the damage taken by all allies that are under no active buffs by 25%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 156",
        "DEF": "1 299",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 40%`,
};
