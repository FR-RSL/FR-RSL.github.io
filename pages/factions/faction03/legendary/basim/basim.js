const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dagger Swirl",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 50% chance of placing a 25% [Weaken] debuff for 2 turns. If this Champion is under a [Veil] or [Perfect Veil] buff, the chance increases to 100%. <br><br>Then has a 50% chance of applying a [Debuff Spread] effect, taking 1 random debuff from the target and placing it on all enemies. If this Champion is under a [Veil] or [Perfect Veil] buff, the chance increases to 100%.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Up In Smoke",
          description: `Attacks all enemies. Will ignore 15% of each target's DEF. Will ignore 30% of each target's DEF instead if this Champion is under a [Veil] or [Perfect Veil] buff. <br><br>Has a 75% chance of placing a [Block Active Skills] debuff for 2 turns. This debuff will ignore any [Block Debuffs] buffs if this Champion is under a [Veil] or [Perfect Veil] buff.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Winds of Baghdad",
          description: `Attacks 1 enemy 2 times. Deals 5% more damage for each buff and debuff on this Champion and 5% more damage for each buff and debuff on the target (stacks up to 100%). <br><br>Places a [Perfect Veil] buff on this Champion for 3 turns, and grants an Extra Turn.`,
          damage: "3.2*ATK+(0.05*BUFF_COUNT+0.05*DEBUFF_COUNT+0.05*REL_TRG_BUFF_COUNT+0.05*REL_TRG_DEBUFF_COUNT)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Everything is Permitted [P]",
          description: `Whenever an enemy's HP drops below 25% after receiving damage from any Assassin, they receive additional bonus damage proportional to this Champion's ATK. This bonus damage will ignore 100% of the target's DEF and cannot be critical.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Masterful Thief [P]",
          description: `Whenever this Champion is attacked, steals 1 random buff from the attacker and transfers 1 random debuff from this Champion to the attacker. These effects will ignore [Polymorph]. Occurs once per skill. <br><br>Will ignore 25% of a target's RES when using skills if this Champion is under a [Veil] or [Perfect Veil] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 487",
        "DEF": "1 035",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in all Battles by 30%`,
};
