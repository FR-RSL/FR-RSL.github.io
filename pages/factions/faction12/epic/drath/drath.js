const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Scepter of Authority",
          description: `Attacks 1 enemy. Has a 35% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Necro Mutation",
          description: `Heals all allies by 20% of this Champion's MAX HP. After healing, places a [Perfect Veil] buff for 2 turns on all allies with full HP. Places a 15% [Continuous Heal] buff for 1 turn instead on all allies with less than 100% HP.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Spirit Form",
          description: `Revives a single ally with 60% HP and fills their Turn Meter by 60%. Places a [Perfect Veil] buff on them for 3 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Master of Ghosts [P]",
          description: `Whenever an ally under a [Veil] or [Perfect Veil] buff gets a turn, heals them by 10% of their MAX HP. Also increases the RES of allies under [Veil] or [Perfect Veil] buffs by 50.<br><br>[Will only increase RES once per ally if there are multiple Rectors on the team.]<br><br>Heal Multiplier: 0.1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 035",
        "DEF": "1 134",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Doom Tower by 55`,
};
