const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Misery Morningstar",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns. <br><br>If the target is under a [Leech] debuff, has a 100% chance of placing a 50% [Decrease ATK] debuff on the target for 2 turns before attacking.`,
          damage: "0.25*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cloying Horror",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns. <br><br>Also places a [Shield] buff on all allies equal to 30% of this Champion's MAX HP for 2 turns. The [Shield] buff cannot be removed if it is placed when there are any enemies under [Leech] debuffs.<br><br><br>Shield Multiplier: 0.3*HP`,
          damage: "0.35*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vermin Vitae",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. <br><br>Also places a 30% [Reflect Damage] buff on all allies for 2 turns, then heals this Champion by 50% of their MAX HP.<br><br><br>Heal Multiplier: 0.5*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Soul Rot [P]",
          description: `Whenever an ally under a [Reflect Damage] buff is attacked, places a [Leech] debuff on the attacker for 1 turn.<br><br>Reflects 50% of the damage this Champion receives back to the attacker. <br><br>Increases the amount of damage reflected by 20% from [Reflect Damage] buffs placed by allies.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "826",
        "DEF": "1 222",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
