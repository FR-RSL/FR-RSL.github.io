const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Icebreaker",
          description: `Attacks 1 enemy 2 times. Places an extra hit if the target has a [Freeze] debuff.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bonechiller",
          description: `Removes all buffs from all enemies. Has an 80% chance of placing a [Freeze] debuff on all enemies for 1 turn. Grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Avalanche",
          description: `Attacks all enemies. Places a 60% [Decrease DEF] debuff on all enemies for 2 turns.<br><br>Places an extra hit if the target is under a [Freeze] debuff.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Frost Embrace [P]",
          description: `When hit by an enemy, has a 30% chance of placing a [Freeze] debuff on the attacker for 1 turn. <br><br>Increases the damage inflicted by allies against enemies under a [Freeze] debuff by 25%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 465",
        "DEF": "1 046",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 30%`,
};
