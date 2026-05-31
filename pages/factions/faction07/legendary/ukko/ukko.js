const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ukko Smash",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "2.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ukko's Fury",
          description: `Attacks all enemies 2 times. Each hit has a 75% chance to remove 2 random buffs from the target. <br><br>Places a [Block Buffs] debuff and a 50% [Decrease ACC] debuff for 2 turns on targets that have no buffs after the attack.`,
          damage: "2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ukko's Mercy",
          description: `Revives all dead allies with 40% HP, then places a [Block Damage] buff on them for 1 turn. <br><br>Also places a 30% [Increase SPD] buff on all allies for 2 turns. Will place the [Increase SPD] buff even if there are no dead allies.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Totem Warden [P]",
          description: `Has a 50% chance of stealing 1 random buff from a random enemy each time a buff is placed on the enemy team. Will only attempt to steal one buff for each type of buff placed simultaneously (for example, only one random buff may be stolen if 3 [Shield] buffs are placed at the same time). Any stolen buffs become protected.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 233",
        "DEF": "1 112",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 20%`,
};
