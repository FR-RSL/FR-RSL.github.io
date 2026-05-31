const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Revelation Spear",
          description: `Attacks 1 enemy. Places an extra hit on enemies under [Decrease C. RATE] or [Decrease C. DMG] debuffs placed by this Champion. The extra hit is always a normal hit and will ignore 50% of each target's DEF. <br><br>Also places a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          damage: "3.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Truth Beheld",
          description: `Attacks all enemies. <br><br>Before attacking, increases the duration of all ally buffs by 1 turn. <br><br>Damage inflicted by this skill increases by 5% for each buff that had its duration increased.`,
          damage: "3.7*DEF+(3.7*DEF*0.05*Total Duration Increased)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Censer Barrier",
          description: `Places a 30% [Reflect Damage] buff on all allies for 2 turns, and a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. <br><br>Also places a 25% [Strengthen] buff and a 50% [Increase RES] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Maw of Deterrence [P]",
          description: `Whenever an ally under a [Reflect Damage] buff is attacked, places a 30% [Decrease C. RATE] debuff and a 25% [Decrease C. DMG] debuff on the attacker for 2 turns. This effect cannot be resisted.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "925",
        "DEF": "1 421",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 25%`,
};
