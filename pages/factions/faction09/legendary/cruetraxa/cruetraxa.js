const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dire Perforation",
          description: `Attacks 1 enemy 4 times. Will ignore 50% of enemy DEF and [Block Damage] buffs.<br><br>Level 2 : +5% Damage<br>Level 3 : +5% Damage<br>Level 4 : +5% Damage<br>Level 5 : +10% Damage`,
          damage: "0.8*ATK",
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Curse of Writhing",
          description: `Attacks 1 enemy. Before attacking, has a 75% chance of removing all buffs from the target and has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.<br><br>Will ignore 25% of the target's DEF. If the target is killed by this skill, places a [Block Revive] debuff on them.<br><br>Grants an Extra Turn.<br><br>Level 2 : +5% Damage<br>Level 3 : +5% Buff/Debuff Chance<br>Level 4 : +10% Buff/Debuff Chance<br>Level 5 : +10% Buff/Debuff Chance`,
          damage: "6.9*ATK",
          cooldown: 3,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rite of Rebirth [P]",
          description: `Places a protected [Revive On Death] buff on this Champion for 2 turns at the beginning of each Round.<br><br>Places a protected [Revive On Death] buff on this Champion for 1 turn whenever this Champion kills an enemy with a critical hit (except Boss' minions).<br><br>When this Champion is revived by a [Revive On Death] buff, fills their Turn Meter by 100% and places a 50% [Increase ATK] buff on them for 1 turn. This Champion then attacks the enemy with the highest Turn Meter using their default skill.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "1 498",
        "DEF": "859",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in all Battles by 30%`,
};
