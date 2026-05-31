const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Surprising Swiftness",
          description: `Attacks 1 enemy. Has a 40% chance of increasing the cooldown of one of the target’s skills by 2 turns at random.`,
          damage: "6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Peace of the Deep",
          description: `Has an 80% chance of placing a [Sleep] debuff on all enemies for 1 turn. [Passive Effect] Whenever an enemy loses a [Sleep] debuff placed by this Skill, has a 50% chance of replacing it with a [Fear] debuff for 1 turn instead.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Revitalizing Rest",
          description: `Places a [Sleep] debuff on an ally for 1 turn. Heals that ally by 50% of their MAX HP and fills their Turn Meter by 50% whenever the [Sleep] debuff expires or gets removed. Heals that ally by 100% and completely fills their Turn Meter if the [Sleep] debuff is lost due to taking damage from an enemy.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "826",
        "DEF": "1 167",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all Battle by 18%`,
};
