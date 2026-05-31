const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crushing Blow",
          description: `Attacks 1 enemy. Heals all allies by 25% of the damage inflicted.<br><br>Has a 50% chance of placing a [Stun] debuff for 1 turn.<br><br>When counterattacking, will also ignore 20% of the target's DEF.`,
          damage: "0.26*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bodyguard",
          description: `Places a 60% [Increase DEF] buff, a 50% [Ally Protection] buff, and a [Shield] buff equal to 30% of this Champion's MAX HP on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mark of Silence",
          description: `Attacks all enemies. <br><br>Has an 80% chance of decreasing the duration of all enemy buffs by 2 turns. Also has an 80% chance of placing a [Block Active Skills] debuff for 2 turns.<br><br>Will ignore 25% of each target's DEF if this Champion is under a [Shield] buff.`,
          damage: "0.3*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Stoic Solidarity [P]",
          description: `Whenever an enemy attacks an ally under a [Shield] buff, counterattacks with this Champion's default skill.<br><br>The damage inflicted by this Champion increases by 10% for each active buff on allies placed by this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "1 013",
        "DEF": "1 090",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 38%`,
};
