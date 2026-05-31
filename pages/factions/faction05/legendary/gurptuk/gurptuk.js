const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Biotic Staff",
          description: `Attacks 1 enemy 2 times. Places a 15% [Continuous Heal] buff for 1 turn on all allies under [Poison] debuffs.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Druidic Boon",
          description: `Removes all debuffs except [Poison] debuffs from an ally, then heals them by 30% of their MAX HP and places a [Shield] buff on the target equal to 20% of their MAX HP for 2 turns.<br><br><br>Heal Multiplier: 0.30*Target Max HPShield Multiplier: 0.2*Target Max HP`,
          cooldown: 3,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Shield +5%", "Level 4: Heal +10%", "Level 5: Shield +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cloud of Spores",
          description: `Places three 2.5% [Poison] debuffs on all allies for 3 turns. These debuffs cannot be resisted or blocked. <br>Also has an 80% chance of placing a [Block Buffs] debuff on all enemies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Symbiotes [P]",
          description: `Allies under [Poison] debuffs inflict 7.5% more damage for each [Poison] debuff on them, stacking up to a maximum of 30%. This damage increase applies to all of their skills.<br><br>Also increases each ally's RES by 15 for each [Poison] debuff on them.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 079",
        "DEF": "1 244",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 50`,
};
