const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Battering Skull",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "3.1*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bakemono Charge",
          description: `Attacks all enemies. Has a 40% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frightful Warcry",
          description: `Places a 25% [Strengthen] buff on all allies for 2 turns. Also places a [Shield] buff for 2 turns on all allies with less than 50% HP. The [Shield] buff is equal to 15% of the target’s MAX HP.<br><br><br>Shield Multiplier: 0.15*Target Max HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Soulmonger [P]",
          description: `Heals this Champion by 50% of their MAX HP whenever an ally or an enemy dies.<br><br>Heal Multiplier: 0.5*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "804",
        "DEF": "1 387",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 40`,
};
