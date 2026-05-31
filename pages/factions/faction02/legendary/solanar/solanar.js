const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Solar Surge",
          description: `Attacks all enemies. This attack is always critical if Noluda the Gloaming is on the same team. Has a 60% chance of placing a [Fatigue] debuff on all enemies for 1 turn.<br><br>[Passive Effect] <br><br>Has an 80% chance to counterattack with this skill whenever an enemy gets an Extra Turn or has an Instant Turn effect activated. <br><br>Has a 15% chance to counterattack with this skill whenever an enemy has their Turn Meter increased.`,
          damage: "2.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blazing Force",
          description: `Attacks 1 enemy. This attack is always critical if Noluda the Gloaming is on the same team. Will ignore 10% of the target’s DEF for each buff on this Champion.<br><br>This Champion is immune to all debuffs while this skill is not on cooldown. Whenever an enemy attempts to place a debuff on this Champion while this skill is not on cooldown, this Champion gains a random buff instead.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unfettered Radiance",
          description: `Attacks 1 enemy. Before attacking, steals all buffs and 100% Turn Meter from the target if they are not under a [Stone Skin] buff. This effect cannot be resisted. This attack is always critical if Noluda the Gloaming is on the same team. Will ignore [Stone Skin] buffs.<br><br>This Champion receives 75% less damage on enemy Extra Turns or Instant Turns while this skill is not on cooldown.<br><br>While this skill is on cooldown, reduces the cooldown by 1 whenever an enemy receives an Extra Turn, has an Instant Turn effect activated on them, or has their Turn Meter increased. Occurs once per turn.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Scholar Of Sun [P]",
          description: `Whenever an enemy receives healing, has a 100% chance to reduce the amount of healing received to zero. This Champion will receive that healing instead. If Noluda the Gloaming is on the same team, enemies will receive damage equal to the amount of healing instead.<br><br>Once per Round, if this Champion is dead, revives this Champion with 100% HP and 100% Turn Meter when their last living ally is killed. Then places a [Magma Shield] buff on this Champion for 2 turns. The value of the [Magma Shield] is equal to 300% of this Champion’s MAX HP. If Noluda the Gloaming is on the same team, this buff is protected.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 608",
        "DEF": "991",
        "VIT": "105",
        "TAUX C.": "1515%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
