const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chaff-Reaper",
          description: `Attacks 1 enemy. Will ignore 25% of the target’s DEF. <br><br>Heals all allies with less than 50% HP by 10% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Culler of the Weak",
          description: `Attacks all enemies 2 times. <br><br>Each hit will ignore 25% DEF against targets with less than 50% HP. The first hit has a 75% chance of placing a 60% [Decrease DEF] debuff on each enemy for 2 turns. The second hit has a 75% chance of placing a [Block Buffs] debuff on each enemy for 2 turns. Each hit will ignore 25% RES against targets with less than 50% HP.`,
          damage: "0.15*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dragonkin Warcry",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns. Also places a [Block Damage] buff on all allies for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ferocious Ambition [P]",
          description: `If an ally has more than 50% HP and is under any buffs placed by this Champion, that ally deals 10% more damage. If an ally has less than 50% HP and is attacked by an enemy under any debuffs placed by this Champion, that ally receives 10% less damage. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "826",
        "DEF": "1 244",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 28%`,
};
