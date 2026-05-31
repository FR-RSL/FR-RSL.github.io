const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Arena Arts",
          description: `Attacks 1 enemy. Places a [Shield] buff on this Champion for 2 turns equal to 5% of the damage inflicted if this attack is critical.<br><br><br>Shield Multiplier: 0.05*Damage Dealt`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Shield +5%", "Level 4: Damage +5%", "Level 5: Shield +5%", "Level 6: Damage +5%", "Level 7: Shield +5%", "Level 8: Damage +5%", "Level 9: Shield +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crowd Pleaser",
          description: `Attacks 1 enemy. Destroys the target's MAX HP by 30% of the damage dealt. Places a [Shield] buff on this Champion for 2 turns equal to 30% of the damage inflicted if this attack is critical.<br><br><br>Shield Multiplier: 0.3*Damage Dealt`,
          damage: "6.5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Shield +5%", "Level 4: Damage +5%", "Level 5: Shield +5%", "Level 6: Damage +5%", "Level 7: Shield +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Showoff [P]",
          description: `Increases the damage inflicted by this Champion equal to the percentage of MAX HP destroyed on the target.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 233",
        "DEF": "837",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Doom Tower by 25%`,
};
